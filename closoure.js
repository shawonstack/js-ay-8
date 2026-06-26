function outer() {
  let name = 'shawno';
  function inner() {
    console.log(name);
  }
  return inner();
}
// outer();
// -------
function numberCalculation() {
  let numebr = 12;
  function child() {
    console.log(numebr);
  }
  child();
}
numberCalculation();
// -------------
function father() {
  let home = 'santiniketon';
  function son() {
    home = 'nikunja';
    console.log(home);
  }
  return son;
}
let result = father();
result();
// ---------discount releted issue
function creatDiscount(discount) {
  return function (price) {
    return price - price * discount;
  };
}
// const createDiscount = discount => price => price - price * discount;
console.log(creatDiscount(0.2)(1000));
// ---------event handeler
const button = document.querySelector('button');

let count = 0;

button.addEventListener('click', function () {
  count++;
  console.log(count);
});
// ---------memziedsquire
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
