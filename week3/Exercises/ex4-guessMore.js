// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x); // ! = 10
console.log(x); // ! = 9

// ! f(9) = 9 + 1 = 10 // x is a global variable and is equal to 9; and the function can use it to return the value.


const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y); // ! { x: 10 }
console.log(y); // ! { x: 10 }

// ! f(y.x) = 9 + 1 = 10 // x is the property of y and y is in the global scope and the function can use it to return the value.