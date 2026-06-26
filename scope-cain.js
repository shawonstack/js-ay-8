const country = 'bangladesh';
function outer() {
  const city = 'dhaka';
  function inner() {
    const location = 'mirpur';
    console.log(country);
    console.log(city);
    console.log(location);
  }
  return inner;
}
// const result = outer();
// result();
// const country = 'Bangladesh';

function outer() {
  const city = 'Dhaka';

  function inner() {
    const area = 'Mirpur';

    console.log(area);
    console.log(city);
    console.log(country);
  }

  inner();
}

// outer();
// ---------------------------
function test() {
  const age = 25;
  console.log(age);
}
test();
// -----------
const apiUrl = 'https://api.com';

function fetchUser() {
  function getData() {
    console.log(apiUrl);
  }

  getData();
}

fetchUser();
// scope cain vs lexical scope
