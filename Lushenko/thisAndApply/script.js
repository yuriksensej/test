// document.querySelector('.btn').onclick = function () {
//   this.innerHTML += '0';
//   console.log(this);
// };
// document.querySelector('.btn').addEventListener('click', function () {
//   this.innerHTML += '0';
//   console.log(this);
// });

document.querySelector('.btn').onclick = f1;
function f1() {
  this.innerHTML += '0';
  console.log(this);
}
