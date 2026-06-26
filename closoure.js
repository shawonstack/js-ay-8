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
