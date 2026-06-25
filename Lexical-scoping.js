// Lexical-scoping.js
const a = 10;
function first() {
  function second() {
    console.log(a);
  }
  second();
}
// first();
const appName = 'netflix';
function login() {
  const user = 'rahim';
  console.log(appName);
  console.log(user);
}

// login();
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
// dashoard();
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
