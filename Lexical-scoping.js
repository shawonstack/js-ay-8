// Lexical-scoping.js
const a = 10;
function first() {
  function second() {
    console.log(a);
  }
  second();
}
first();
const appName = 'netflix';
function login() {
  const user = 'rahim';
  console.log(appName);
  console.log(user);
}

login();
// ---------- react comonent reeted
const theme = 'dark';
function dashoard() {
  const user1 = 'blood';
  function second() {
    console.log(theme);
    console.log(user1);
  }
  second();
}
dashoard();
// -------lexical scope vs function call
let p = 10;

function one() {
  let q = 20;

  function two() {
    let r = 30;

    console.log(p);
    console.log(q);
    console.log(r);
  }

  two();
}

one();
// ---------------5 task solve
let a2 = 5;

function test() {
  console.log(a2);
}

test();
// ----------
let a3 = 10;

function first() {
  let b = 20;

  function second() {
    console.log(a3);
    console.log(b);
  }

  second();
}

first();
// ------------
function parent() {
  let money = 500;

  function child() {
    console.log(money);
  }

  child();
}

parent();
// -------------
// function parent() {
//   let money = 500;
// }

// console.log(money);
// -------------
const name = 'Global';

function one() {
  const name = 'One';

  two();
}

function two() {
  console.log(name);
}

one();
