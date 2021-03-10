// console.log('Request data...');
// setTimeout(() => {
//   console.log('Preparing data...');
//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working',
//   };
//   setTimeout(() => {
//     backendData.modified = true;
//     console.log('Data recieved', backendData);
//   }, 2000);
// }, 2000);
const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Preparing data...');
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working',
    };
    resolve(backendData);
  }, 2000);
  console.log('HELLO');
});
p.then((a) => {
  console.log('Promise resolved', a);
});
