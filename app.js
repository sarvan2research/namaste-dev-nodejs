require("./xyz.js");
//import { x, calculateSum } from "./sum.js";  ES Way

//calculatedSum = require("./sum.js"); //single obj
//const obj = require("./sum.js"); // multi object
const { x, calculateSum } = require("./sum.js"); // shorthand notation

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

// Short hand notation
calculateSum(a, b);
console.log(x);
