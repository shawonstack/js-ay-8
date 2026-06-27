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
function creatAccount() {
  let balance = 1000;
  return {
    deposit(amount) {
      balance = balance + amount;
    },
    getBalance() {
      return balance;
    },
  };
}
const result = creatAccount();
result.deposit(500);
console.log(result.getBalance());
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
// counter releted issue---------------
function creatCount() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = creatCount();
// factory function --------
function creatDiscount(discount) {
  return function (price) {
    return price - price * discount;
  };
}
const result = creatDiscount(0.1)(6000);
// console.log(result);
// -------------------event handeler----------
const button = document.querySelector('button');

let count = 0;

button.addEventListener('click', function () {
  count++;
  console.log(count);
});
// -----------------Memoization (Performance Optimization)
function memoizedSquare() {
  let cache = {};

  return function (num) {
    if (cache[num]) {
      console.log('From Cache');
      return cache[num];
    }

    console.log('Calculated');

    let result = num * num;

    cache[num] = result;

    return result;
  };
}
