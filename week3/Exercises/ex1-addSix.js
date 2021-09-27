function createBase(num) {
  function add(num) {
  return num + 9;
  }
  return add;
}

const addSix = createBase(6);

console.log(addSix(6));
console.log(addSix(15));
console.log(addSix(24));