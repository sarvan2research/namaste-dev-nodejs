//export function calculateSum(a, b) { ES WAY
function calculateSum(a, b) {
  // module export option
  const sum = a + b;
  console.log(sum);
}
// ES Way
// export let x = 101;

let x = 101;

//module.exports = calculateSum;
//module.exports = { calculateSum: calculateSum, x: x };
// Another way of exporting
module.exports.x = x;
module.exports.calculateSum = calculateSum;
