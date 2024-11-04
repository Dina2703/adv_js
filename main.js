// Nested functions'scope
//Closure
// Currying
// this keyword
// Prototype
// Prototype inheritance
// Class
// Iterables and Iterators
// Generators

// --------------Scope------------------
// FUNCTION SCOPE - Variables declared within a function are only accessible within that function and any nested functions. this is a traditional scope in JS, and it applies to variables declared with 'var'.
function myFunction() {
  var x = 10;
  console.log(x); // Output: 10
}
// console.log(x);
myFunction();

//BLOCK SCOPE -  Introduced with ES6 (ECMAScript 2015), block scope is defined by curly braces ({}). Variables declared with 'let' and 'const' are blocked-scoped, meaning they are only accessible within the block they are defined in.

if (true) {
  let y = 20;
  console.log(y); // Output: 20
}

// console.log(y); // Error: y is not defined

function example() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;

    console.log(a, b, c); // Output: 1, 2, 3
  }

  console.log(a); // Output: 1 (function scope)
  // console.log(b); // Error: b is not defined (block scope)
  // console.log(c); // Error: c is not defined (block scope)
}

example();

//GLOBAL SCOPE  - globally scoped variables can be accessed inside a block or function.

//-----------------------Nested Function Scope --------------------
//Inner functions have access to outer scopes, lexical scope.
// When a variable is referenced, JavaScript first looks for it in the current scope. If it's not found, it looks in the enclosing scope, and so on, until it reaches the global scope. This chain of scopes is known as the scope chain.
let a = 10;
function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}

outer();

// -----------Closure------------------
//Closure is created when a function is return from another function. In the example below the outerFn() returns the innerFn as well as its scope, in our examples the function scope has just one variable ( let counter = 0), so we have the function InnerFn bundled together with the variable counter which is together termed as a CLOSURE. In such situations function will remember the value of the counter variable. Keep in mind that the innerFn will have an access to the ouside scope variable 'counter', when when th outerFn has completed its execution.
function outerFn() {
  let counter = 0;
  function innerFn() {
    counter++;
    console.log(counter);
  }
  return innerFn;
}
const fn = outerFn();
fn();
fn();
fn();
fn();
