//--------------- This keyword ------------------
//How to determine 'this'?
// # Implicit binding (means referring to something that is understood, but not described clearly or directly).It states that if a function (sayMyName()) is invoked with a dot notation the object(person. ) to the left of the dot is whta dot keyword is referencing. In our case js will tread our 'this.name' as 'person.name', which is equal to the string 'Ann'. This is the implicit binding rule.
const person = {
  name: "Ann",
  sayMyName: function () {
    console.log(`My name is ${this.name} `);
  },
};

person.sayMyName();

// # Explicit binding (means something is clear, direct  and without vagueness). Here we have to explicitly specify the context then the function is called. To do this we use call() method, in JS every function has a build-in method call() which allows you to specify the context with which a function invoked. sayMyName.call(person1) person2 is as argument. The first argument passed call() is what 'this' keyword referencing.

const person2 = {
  name: "Joe",
};

function sayMyName() {
  console.log(`My name is ${this.name} `);
}

sayMyName.call(person2);

// # New binding. In JS we can invoke a function with a 'new' keyword, in such a scenario the function is invoked with 'this' keyword is referencing an empty object. Now using a construction function (Person()), we can craete multiple persons from this function,

function Person(name) {
  //this ={} 'new' keyword creates an empty object and you can add any properties to the object using 'this'
  this.name = name;
}

const p1 = new Person("Ellen");
const p2 = new Person("Sammy");
console.log(p1.name, p2.name);

// const name = "GlobalName";//for browser
globalThis.name = "GlobalName"; //for node

// # Default binding - is a fallback binding if none of the other three rules are matched.
sayMyName(); //no call(), no  dot notation, no 'new' keyword. This this case JS will default to the Global scope and set 'this' keyword to the global object. and will look for any variable in the gloval scope named 'name', if there is no any global scoped variable in will return 'underfined'
