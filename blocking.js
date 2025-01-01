const crypto = require("node:crypto");

console.log("Logging into blocking js file");

const a = 1244;
const b = 2345;
//SYNC block always block main thread to execute
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("first key is getting generated");

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("async key got generated");
});

function multiply(a, b) {
  return a * b;
}

const mul = multiply(a, b);

console.log("multiplication result is==> " + mul);
