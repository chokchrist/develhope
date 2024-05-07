// Convert the developer object into JSON

// class Person {
//   constructor(id, firstName, lastName, age) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
// }

// const developer = new Person(1, 'Mario', 'Rossi', 25);
// // Print developer as JSON object

class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);

const developerJson = JSON.stringify(developer);

console.log(developerJson); 
