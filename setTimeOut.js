console.log("Its timout testing js");

const a = 14534;
const b = 123467;

setTimeout(() => {
  console.log(
    "Call me asap, but due to Callback this is getting called after GEC thread finished it"
  );
}, 0);

setTimeout(() => {
  console.log("Call me after 3 seconds");
}, 3000);

function multiply(a, b) {
  return a * b;
}

var mul = multiply(a, b);

console.log("multiplication result is : " + mul);
