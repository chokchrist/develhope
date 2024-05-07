// Create an object person. Print its key/value pair in the console. Try to use the method Object.keys:
// firstName: Mario
// lastName: Rossi
// age: 25

const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25
}

const keys = Object.keys(person);

keys.forEach(key => {
  console.log(`${key}: ${person[key]}`);
});