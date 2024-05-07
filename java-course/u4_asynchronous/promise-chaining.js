// Write a first promise that takes as parameter the variable isLogged . 
// If the variable is true, then we return a random number from the resolve, otherwise we dispatch an error. 
// We write a second promise that takes a variable of type number as a parameter. 
// If the input parameter is greater than 0.5, in the resolve we must return the following data: {name: "John", age: 24}, 
// otherwise we must dispatch an error. Once this is done, try to chain the promises to eventually 
// return the final object {name: "John", age: 24}

// const isLogged = true;

const isLogged = true;

const firstPromise = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      const randomNumber = Math.random();
      resolve(randomNumber);
    } else {
      reject(new Error("User is not logged in"));
    }
  });
};

const secondPromise = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Random number is less than or equal to 0.5"));
    }
  });
};

firstPromise(isLogged)
  .then((randomNumber) => {
    console.log(`Random number: ${randomNumber}`);
    return secondPromise(randomNumber);
  })
  .then((result) => {
    console.log("Resulting object:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
