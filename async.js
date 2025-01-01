const https = require("node:https");
const fileReader = require("fs");

console.log("My first nodejs testing...");

const a = 100034;
const b = 4883;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("request incoming logged.");
  //console.log(res);
  res.resume();
});

setTimeout(() => {
  console.log("Its async call handled by libuv");
}, 5000);

fileReader.readFile("./file1.txt", "utf-8", (error, raw) => {
  if (error) {
    console.error("Error reading file:", error);
  } else {
    console.log("File content ==> " + raw);
  }
});
// Its blocking call
fileReader.readFileSync("./file1.txt", "utf-8");

function multiply(a, b) {
  console.log("j8 engine call ==>");
  return a * b;
}
var c = multiply(a, b);
console.log("Finall from GEC:" + c);
