console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:Promise Exercise - My Code \n==========\n");

let watching = new Promise((resolve, reject) => {
  //let userWatchingLiveStream = true;
  let userWatchingLiveStream = false;
  if (userWatchingLiveStream) {
    resolve("Thumbs up and Subscribe");
  } else {
    reject({
      name: "User Left",
      message: ":(",
    });
  }
});

watching
  .then((msg) => console.log(msg))
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

console.log(watching);

// Exercise 1 Section
console.log("EXERCISE 1A: Promise Exercise - Class Review \n==========\n");
//Get Userid
class API {
  static getUser(id) {
    return Boolean(Math.round(Math.random()));
  }
}

let promise1a = new Promise((resolve, reject) => {
  let userLeft = API.getUser(85);
  //let userLeft = true;
  if (userLeft) {
    reject("User Left");
  } else {
    resolve("Thumbs up and Subscribe!");
  }
});

promise1a
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

console.log(promise1a);

console.log("EXERCISE 1B: Promise as a Function \n==========\n");
function watchFunction(userActive) {
  let userWatchingLiveStream = userActive;
  let watching = new Promise((resolve, reject) => {
    if (userWatchingLiveStream) {
      resolve("Thumbs up and Subscribe");
    } else {
      reject({
        name: "User Left",
        message: ":(",
      });
    }
  });
  watching
    .then((msg) => console.log("User is Watching:", msg))
    .catch((error) => {
      console.log("User is Not Watching: ", error.name + " " + error.message);
    });
}

console.log("Promise Function with false: ", watchFunction(false));
console.log("Promise Function with true: ", watchFunction(true));
