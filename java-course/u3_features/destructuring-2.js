// Use the destructuring to assign the values just with one code line.

// const person = {
//   id: 1,
//   firstName: 'Mario',
//   lastName: 'Rossi',
//   age: 25
// };

// const id = person.id;
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

// console.log(id, firstName, lastName, age);

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, firstName, lastName, age } = person;

console.log(id, firstName, lastName, age); 