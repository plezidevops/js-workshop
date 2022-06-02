// Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;

  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject('Data not received');
  }
});

// Handle a Fulfilled Promise with then
makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});

/*
A promise has three states: pending, fulfilled, and rejected.
  resolve is used when you want your promise to succeed
  reject is used when you want it to fail
  then used to allow you to do something with the response
  catch is the method used when your promise has been rejected

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server.
*/