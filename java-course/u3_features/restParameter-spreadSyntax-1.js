// Do you know how to "merge" the value of the newNumber variable into numberStore without using the array method push?

// let numberStore = [0, 1, 2];
// let newNumber = 3;
// numberStore.push(newNumber);
// console.log(numberStore);

let numberStore = [0, 1, 2];
let newNumber = 3;

numberStore = [...numberStore, newNumber];

console.log(numberStore);
