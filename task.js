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
const counter = makeCounter();
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
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
const user = creatUser('shawon');
console.log(user.getName());
console.log(user.getPass('3456'));
