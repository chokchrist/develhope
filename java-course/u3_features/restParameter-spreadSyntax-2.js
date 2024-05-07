// The sum function has a high numbers of parameters. 
// How can we improve the code in order to make it accept any amount of numbers to sum as its argument?

// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

// console.log(sum(1, 2, 3, 4, 5));

function sum(...numbers) {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

console.log(sum(1, 2, 3, 4, 5)); 
console.log(sum(10, 20, 30)); 
console.log(sum(5)); 
