// function creatUser(name) {
//   return {
//     name: name,
//     sayname: function () {
//       console.log(`my name is ${name}`);
//     },
//   };
// }
// const user = creatUser('shawon');
// console.log(user());
function createUser(name) {
  return {
    name,
    sayHello() {
      return `Hello ${name}`;
    },
  };
}

const user1 = createUser('Shawon');
const user2 = createUser('Nayeem');
console.log(user1.sayHello());
function multiplir(num) {
  return {
    double(x) {
      console.log(x * x);
      return;
    },
    triple(y) {
      console.log(x ** 3);
    },
  };
}
