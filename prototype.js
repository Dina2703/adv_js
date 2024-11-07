//-------------- Prototype ----------------
//In JS all functions have a property named = prototype. It helps us to define all our shareable properties.
function Person(fName, lName, age) {
  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
}

//The function which is used with the 'new' keyword is called a constructor function.
//A constructor is a special function that creates and initializes an object instance of a class.(создает и инициализирует экземпляр объекта класса)
const person1 = new Person("Ann", "Lee", 30);
const person2 = new Person("Joen", "Dohe", 41);

//now only person1 object has the getFullName() method
person1.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
console.log(person1.getFullName());
// console.log(person2.getFullName());//gives an error

//'Prototype' property sets up shareable methods/Instance method. Now getFullNameAndAge() method is availabel on every instance of the Person function/object.
Person.prototype.getFullNameAndAge = function () {
  return `${this.firstName} ${this.lastName} ${this.age} years old`;
};

console.log(person1.getFullNameAndAge());
console.log(person2.getFullNameAndAge());
