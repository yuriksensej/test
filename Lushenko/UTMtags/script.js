document.querySelector('.btn1').addEventListener('click', parseURL);
function parseURL() {
  const str = document.querySelector('.textarea1').value;
  let urlData = new URL(str);
  let out = document.querySelector('.output1');
  out.textContent = `Host: ${urlData.host};\n`;
  let utmObj = parseUTMtoJSON(urlData.search);
  for (const key in utmObj) {
    out.textContent += `${key}:${utmObj[key]}\n`;
  }
}
function parseUTMtoJSON(utm) {
  let str = utm;
  changedStr = '';
  let count = 0;
  if (str.indexOf('?') == 0) {
    changedStr = str.substring(1);
    str = changedStr;
  }
  while (str.search(/&amp|&AMP|&#x00026|&#38/) != -1 || count > 100) {
    changedStr = str.replace(/&amp|&AMP|&#x00026|&#38/, '&');
    str = changedStr;
    count++;
  }
  //make JSON devided by & and =
  let arr = str.split('&');
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let arr2 = [];
    arr2 = element.split('=');
    obj[arr2[0]] = arr2[1];
    arr2 = [];
  }
  // return obj
  return obj;
}
let a =
  'https://www.citrus.ua/noutbuki-i-ultrabuki/apple-macbook-air-m1-chip-13256-space-gray-2020-676954.html?utm_medium=cpc&utm_source=hotline&utm_campaign=%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%B8,%20%D1%83%D0%BB%D1%8C%D1%82%D1%80%D0%B0%D0%B1%D1%83%D0%BA%D0%B8&utm_term=Apple%20MacBook%20Air%2013%22%20Space%20Gray%20Late%202020%20%28MGN63%29&utm_content=676954';
document.querySelector('.textarea1').textContent = a;
