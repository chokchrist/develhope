const isLogged = true;

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

const firstPromise = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged) {

      const randomNumber = Math.random();
      resolve(randomNumber);
    } else {

      reject(new CustomError("User is not logged in"));
    }
  });
};

const secondPromise = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new CustomError("Random number is less than or equal to 0.5"));
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
    console.error(`An error occurred: ${error.name} - ${error.message}`);
  })
  .finally(() => {
    console.log("Promise chain completed.");
  });
