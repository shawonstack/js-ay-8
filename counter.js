function creatCounter() {
  let number = 0;
  return function () {
    number++;
    return number;
  };
}
const result = creatCounter();
// -------
function creatCslculatior() {
  let count = 10;
  return function () {
    count++;
    return count;
  };
}
const calculator = creatCslculatior();
console.log(calculator());
function passwordLonger() {
  let password = 0;
  return function () {
    password++;
    password--;
    return password;
  };
}
const pass = passwordLonger();
console.log(pass());
