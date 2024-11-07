// -------------  CLASS --------------
//A class is a template for craeting objects.
//class can be considered a syntactic sugar to define a constructor together with its prototype methods

//-----with function
// function Person(fName, lName, age) {
//   this.firstName = fName;
//   this.lastName = lName;
//   this.age = age;
// }
// Person.prototype.getFullNameAndAge = function () {
//   return `${this.firstName} ${this.lastName} ${this.age} years old`;
// };

//with 'class' keyword. all the properties goes inside the 'constructor' function, and all the object prototype methods listed withih the class.

class PersonClass {
  //initialize props with constructor()
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
  //methods
  sayMyName() {
    return `My  name is ${this.firstName} ${this.lastName}`;
  }
}

const class1 = new PersonClass("Sam", "Shoh");
console.log(class1.sayMyName());

// To re-write the Prototypal Inheritance example, use 'extence' and 'super' keywords.
class SuperPerson extends PersonClass {
  constructor(fName, lName) {
    super(fName, lName); //this 'super' calls PersonClass constructor() (to inherite)
    this.isSuperHero = true;
  }

  fightCrime() {
    console.log("Fighting crime");
  }
}

//create a new instance of SuperPerson
const ladybag = new SuperPerson("Ladybag", "Ketty");

console.log(ladybag.sayMyName());
