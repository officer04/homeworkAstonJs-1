//1)

console.log('1');
setTimeout(() => console.log('2'), 1);
let promiseNew = new Promise((resolve) => {
  console.log('3');
  resolve();
});
promiseNew.then(() => console.log('4'));
setTimeout(() => {
  console.log('5');
  setTimeout(() => console.log('1000000'), 0);
});
console.log('6');

// 136452

console.log('1');
setTimeout(() => {
  console.log('2');
  setTimeout(() => {
    console.log('4');
  }, 1);
}, 0);

setTimeout(() => {
  console.log('1001010');
}, 0);
console.log('3');

//2)

// let promiseTree = new Promise((resolve, reject) => {
// resolve("a");
// console.log("1");
// setTimeout(() => {
// console.log("2");
// }, 0);
// console.log("3");
// });

//132

//3)

// let promiseTwo = new Promise((resolve, reject) => {
//   resolve('a');
// });
// promiseTwo
//   .then((res) => {
//     return res + 'b';
//   })
//   .then((res) => {
//     return res + 'с';
//   })
//   .finally((res) => {
//     return res + '!!!!!!!';
//   })
//   .catch((res) => {
//     return res + 'd';
//   })
//   .then((res) => {
//     console.log(res);
//   });

// Promise.reject('a')
//   .then((p) => p + 'a')
//   .then((p) => p + 'f')
//   .finally((p) => p + 'd')
//   .catch((p) => p + 'B')
//   .catch((p) => p + 'c')
//   .then((p) => console.log(p));

//abc

//4)

// function doSmth() {
// return Promise.resolve("123");
// }
// doSmth()
// .then(function (a) {
// console.log("1", a); //
// return a;
// })
// .then(function (b) {
// console.log("2", b);

// return Promise.reject("321");
// })
// .catch(function (err) {
// console.log("3", err);
// })
// .then(function (c) {
// console.log("4", c);
// return c;
// });

//5)

// console.log("1");
// setTimeout(function () {
// console.log("2");
// }, 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");

// 1432
