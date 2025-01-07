const fs = require("fs");

const a = 100;

console.log("Logging in event-loop-3 class");

setImmediate(() => console.log("1st immediate is called"));

setTimeout(() => console.log("First timeout is getting called!!"), 0);

Promise.resolve("promise").then(console.log);

fs.readFile("./file1.txt", "utf8", () => {
  console.log("File is getting read!!");
});

process.nextTick(() => {
  process.nextTick(() => console.log(" Inner process next tick"));
  console.log("1st Process.nextTick");
});

function printA() {
  console.log("Method a is called a=" + a);
}

printA();
console.log("Last line of event-loop-1 example js file");
