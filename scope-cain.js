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
const country = 'Bangladesh';

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
