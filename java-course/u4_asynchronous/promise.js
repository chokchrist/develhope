// Write a promise. If the variable called number is greater than 10, then it returns a resolve, otherwise it returns a reject. 
// Then manage the promise with then and catch in case of any reject.

// const number = 15;

const number = 15;

const checkNumber = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number);
  } else {
    reject(new Error(`Number ${number} is not greater than 10`));
  }
});

checkNumber
  .then((value) => {
    console.log(`In then you have to print the value of number: ${value}`);
  })
  .catch((error) => {
    console.log(`In catch you have to print the error: ${error.message}`);
  });
