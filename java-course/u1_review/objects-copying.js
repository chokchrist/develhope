const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
};

const person2 = person1;

// Modifying `person2.firstName` changes `person1.firstName` as they reference the same object
person2.firstName = "Simon"

console.log(person1);
console.log(person2);

