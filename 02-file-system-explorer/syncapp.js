
const fs = require("fs");

console.log("1. Start");

fs.writeFile("async.txt", "Hello from async code!", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("2. File written");
});

console.log("3. End");
