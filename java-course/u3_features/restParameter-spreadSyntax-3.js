// Perform a code refactoring by using the Rest Operator. The output of the console.log must be the same.

// const person = {
//   id: 1,
//   firstName: 'Mario',
//   lastName: 'Rossi',
//   age: 25
// };

// const id = person.id;
// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age
// };

// console.log(id, personInfo);

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, ...personInfo } = person;

console.log(id, personInfo); 