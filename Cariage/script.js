const out = document.querySelector('.out');
// let t = (tag) => (text) => `<${tag}>${text}</${tag}>`;

function t(tag) {
  return function (text) {
    return `<${tag}>${text}</${tag}>`;
  };
}

let div = t('p');
console.log(div);
let elem = div('hello');
out.innerHTML = elem;
console.dir(elem);
