function nicknameMap(persons) {
    const nicknames = [];
  
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        const name = person.name;
        const age = person.age;
  
        const nickname = `${name}-${age}`;
        nicknames.push(nickname);
    }
    
    return nicknames;
}
  
const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
];
  
const nicknames = nicknameMap(persons);
  
console.log("Persons:", persons);
console.log("Nicknames:", nicknames);
  