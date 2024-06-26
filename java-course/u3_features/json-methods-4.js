// In this exercise we need to filter the properties of the object person in order 
// to convert just the id and age values into JSON.

// const person = {
//   id: 1,
//   firstName: 'Mario',
//   lastName: 'Rossi',
//   age: 25,
// };

// const json = JSON.stringify(person);

// console.log(json); // Should return: { "id": 1, "age": 25 }

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const replacer = (key, value) => {
  if (key === 'id' || key === 'age') {
    return value;
  }
  return undefined;
};

const json = JSON.stringify(person, replacer);

console.log(json);
