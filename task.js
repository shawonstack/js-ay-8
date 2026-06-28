function makeCounter() {
  let count = 10;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    reset() {
      count = 10;
      return count;
    },
  };
}
// const counter = makeCounter();
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset());
// -----------------task2
function creatUser(name) {
  let password = '12345';
  return {
    getName() {
      return name;
    },
    getPass(pass) {
      return pass === password;
    },
  };
}
// const user = creatUser('shawon');
// console.log(user.getName());
// console.log(user.getPass('3456'));
// task -----------3 iife function
// (function () {
//   console.log('my name is shawon');
// })();
// (function () {
//   let secret = 'ABC';

//   console.log(secret);
// })();
// -------task5
function multipilar(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = multipilar(2);
const triple = multipilar(3);
console.log(double(20));
console.log(triple(20));
// ----------task6
const globalVar = 'I am Global';

function outer() {
  const outerVar = 'I am Outer';

  function middle() {
    const middleVar = 'I am Middle';

    function inner() {
      const innerVar = 'I am Inner';

      console.log(globalVar);
      console.log(outerVar);
      console.log(middleVar);
      console.log(innerVar);
    }

    inner();
  }

  middle();
}

outer();
// Global Scope

// globalVar
// outer()

//         │
//         ▼

// Outer Scope

// outerVar
// middle()

//         │
//         ▼

// Middle Scope

// middleVar
// inner()

//         │
//         ▼

// Inner Scope

// innerVar
// ------------------------------------task 7
function memoizedSquare() {
  let cache = {};

  return function (number) {
    if (cache[number]) {
      console.log('From Cache');

      return cache[number];
    }

    console.log('Calculating...');

    let result = number * number;

    cache[number] = result;

    return result;
  };
}

const square = memoizedSquare();

console.log(square(5));

console.log(square(5));

console.log(square(10));

console.log(square(10));
