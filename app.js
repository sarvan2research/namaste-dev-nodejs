require("./xyz.js");
//import { x, calculateSum } from "./sum.js";  ES Way

//calculatedSum = require("./sum.js"); //single obj
//const obj = require("./sum.js"); // multi object
// const { x, calculateSum } = require("./calculate/sum.js"); // shorthand notation
// const { calculateMultiply } = require("./calculate/multiply.js");

// Getting in same file
const { calculateSum, calculateMultiply } = require("./calculate");

// Loading json file to js object
const dataJson = require("./data.json");
// Node have created utils
const nodeUtil = require("node:util");

name = "saravanakumar";

var a = 10;
var b = 100;

// console.log(name);
// console.log(a + b);

//console.log(globalThis);
//console.log(global);
//console.log(global === globalThis);

//Singel object usagae
//calculateSum(a, b);

// Multi object
// obj.calculateSum(a, b);
// console.log(obj.x);

// shorthand notation sum with package style
calculateSum(a, b);
//console.log(x);

// shorthand notation multiply with package style
calculateMultiply(a, b);

console.log(dataJson);
