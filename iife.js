// IIFE= Immediately Invoked Function Expression
// dirrect exicute function s iife

(function () {
  console.log('Hello');
})();
// -------
(function () {
  let a = 10;
  console.log(10 * 10);
});
// parameter
(function (name) {
  console.log(name);
})('Shawon');
// nultiple perameter
(function (a, b) {
  console.log(a + b);
})(10, 20);
// web page load and single page run 1 single time
(function () {
  console.log('App Started');

  const apiUrl = 'my-api.com';

  console.log(apiUrl);
})();
// counter module
const counter = (function () {
  let count = 0;

  return {
    increment() {
      count++;
    },

    getCount() {
      return count;
    },
  };
})();
counter.increment();
counter.increment();

console.log(counter.getCount());
