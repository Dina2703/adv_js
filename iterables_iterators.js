//  ----------  Iterbles and Iterators  --------------
// Before 2015 there were 3 iterations in JS: for loop. while loop and do while loop
//iterate over a string
const word = "Hello";
for (let i = 0; i < word.length; i++) {
  console.log(word.charAt(i));
}

//iterate over an array
const word2 = ["W", "o", "r", "l", "d"];
for (let i = 0; i < word.length; i++) {
  console.log(word2[i]);
}
// as you see for  different data types we use differente approuch, it gives complexity of accesing elements, before even doing something on it.
//Iterables and Iterators make it possible to access data from a collection one at a time which allow us what to do with the data rather than how to access the data. make our code more readable and less confusing.
// in 2015 new Iterbles and Iterators protocols were introduced

//String and Arrrays have build-in iterables, and a new looping construct  - FOR OF LOOP was introduced to iterate over an iterable. For example, arrays and strings are iterables because they contain a collection of elements that can be looped over
//same example but with  = for of loop. We don't have to worry about accesing the element from the data structure.
//iterate over a string
const newWord = "Good day!";
for (const char of newWord) {
  console.log(char);
}

//iterate over an array
const newWordArr = ["G", "o", "o", "d", "m", "o", "r", "n", "i", "g"];
for (const item of newWordArr) {
  console.log(item);
}

/////---------------   Understanding Iterator  ---------------
//an object data type does't have build-in iterable. Unless we make it for it.
// const obj = {} //by default it doesn't have iterables.
//To make an object iterable in JavaScript, you need to implement the Symbol.iterator method on the object. This method should return an iterator object, which is an object that has a next() method. The next() method should return an object with two properties: value (the current value) and done (a boolean indicating whether the iteration is complete).
const myObject = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const value of myObject) {
  console.log(value); // 1, 2, 3
}

//Or you can jsut use 'For ..IN loop for an object
//for (key in object) {
// code block to be executed
//}
