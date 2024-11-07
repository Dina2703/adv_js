//Class: A blueprint or template for creating objects.
//Defines the structure and behavior (properties and methods) that objects created from it will have.

//Object: An instance of a class.
//A concrete entity created based on the class blueprint.
//Holds specific values for the properties defined in the class and can execute the class methods.

//-------------- Prototype ----------------
//In JS all functions have a property named = prototype. It helps us to define all our shareable properties.
function Person(fName, lName, age) {
  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
}

//'Prototype' property sets up shareable methods/Instance method. Now getFullNameAndAge() method is availabel on every instance of the Person function/object.
Person.prototype.getFullNameAndAge = function () {
  return `${this.firstName} ${this.lastName} ${this.age} years old`;
};
//The function which is used with the 'new' keyword is called a constructor function.
//A constructor is a special function that creates and initializes an object instance of a class.(создает и инициализирует экземпляр объекта класса)
const person1 = new Person("Ann", "Lee", 30);
const person2 = new Person("Joen", "Dohe", 41);

console.log(person1.getFullNameAndAge());
console.log(person2.getFullNameAndAge());

//now only person1 object has the getFullName() method
person1.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
console.log(person1.getFullName());
// console.log(person2.getFullName());//gives an error

//--------------- Prototypal Inheritance ------------------
//Use of Prototype is to share properties and methods across instances. And other use Inheritance or Prototypal Inheritance.
//For example we can create a new class, SuperHero, that will inherit properties and methods from Person class.

//to inherite fName and lName from Person we use call() and pass 'this' as a first argument, and other props that we want to inherite from the Person.
function SuperHero(fName, lName, age) {
  //this = {}
  Person.call(this, fName, lName, age);
  this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function () {
  console.log("Fighting Crime");
};
//to inherite 'getFullNameAndAge()' method we use Object.create() and pass Person.prototype.
//How when we try to access SuperHero.getFullNameAndAge - JS checks a prototype object of SuperHero it does't find it then JS sees that the 'prototype object has a chain to 'Person.prototype' created because of the 'Object.create() method' and it check to see if Person.rototype has a getFullNameAndAge method and it does and it will execute that method. And this is how method is inherited through the prototype chain.(hecne the name prototypal inheritance)
SuperHero.prototype = Object.create(Person.prototype);
//Now we can pass full name and age and print them out
const batman = new SuperHero("Spiderman", "Bruce", 20);
//batman object created using SuperHero had a method getFullNameAndAge() inherited from Person.
console.log(batman.getFullNameAndAge());
//a bit of cleanup. Otherwise JS will think that the SuperHero is instance of Person(SuperHero ids created from Person), which is incorrect.
SuperHero.prototype.constructor = SuperHero;
