// returns the average value of an array of numbers
function avg(array) {
  var total = 0;
  function sum() {
    for(let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total
  }
  
  return sum()/array.length
}

module.exports = avg;
