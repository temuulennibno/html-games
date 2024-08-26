const willBeResolve = false;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (willBeResolve) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  }, 3000);
});

console.log("Code started!");
promise
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  })
  .finally(() => {
    console.log("Promise ended");
  });

console.log("Code ended!");

// const getLogs = async () => {
//   console.log("Code started!");

//   try {
//     const response = await promise;
//     console.log(response);
//   } catch (error) {
//     console.warn(error);
//   }

//   console.log("Code ended!");
// };

// getLogs();
