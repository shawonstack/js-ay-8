// closoure-usecase.js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outer();
// data prvecy releted closoure
// function creatAccount() {
//   let balance = 1000;
//   return {
//     deposit(amount) {
//       balance = balance + amount;
//     },
//     getBalance() {
//       return balance;
//     },
//   };
// }
// const result = creatAccount();
// result.deposit(500);
// console.log(result.getBalance());
// -----------------
function creatAccount() {
  let balance = 2000;
  return {
    deposit: function (ammount) {
      balance = balance + ammount;
    },
    getBalance: function () {
      return balance;
    },
  };
}
const account = creatAccount();
account.deposit(3000);
console.log(account.getBalance);
