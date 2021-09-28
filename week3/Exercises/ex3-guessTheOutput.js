// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

// ! "a" is equal to 12, because, "a = 12" declares a block-scoped local variable, and local variables gain priority over global variables.