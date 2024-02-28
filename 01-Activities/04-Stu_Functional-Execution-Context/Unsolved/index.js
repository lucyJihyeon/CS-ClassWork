// returns the average value of an array of numbers
function avg(array) {
  function sum() {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total
    // const sum = array.reduce((accumulator, currentValue) => {
    //   return accumulator + currentValue
    // },0)
    // return sum;
   }

  return sum()/array.length
}

module.exports = avg;

// For-loop method
function sumForLoop(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// Reduce method
function sumReduce(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const { performance } = require('perf_hooks');

let res1 = 0;
let res2 = 0;
const MAX = 1000;
const testArray = Array.from({ length: MAX }, () => Math.floor(Math.random() * MAX));

for (let i = 0; i < MAX; i++) {
  const start1 = performance.now();
  sumForLoop(testArray); 
  const end1 = performance.now();
  res1 += end1 - start1;
  
  const start2 = performance.now();
  sumReduce(testArray); 
  const end2 = performance.now();
  res2 += end2 - start2;
}

console.log(`The test ran for ${MAX} iterations.`);
console.log(`For-loop method: ${res1.toFixed(3)}ms - Reduce method: ${res2.toFixed(3)}ms`);
