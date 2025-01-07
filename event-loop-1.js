const fs = require("fs");

const a = 100;

//console.log("Logging in event-loop-1 class");

setImmediate(() => console.log("Set immediate is called"));

fs.readFile("./file1.txt", "utf8", () => {
  console.log("File is getting read!!");
});

setTimeout(() => console.log("Call timeout is getting called!!"), 0);

function printA() {
  console.log("Method a is called a=" + a);
}

printA();
console.log("Last line of event-loop-1 example js file");
