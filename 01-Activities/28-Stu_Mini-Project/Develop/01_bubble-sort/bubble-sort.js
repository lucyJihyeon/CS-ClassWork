// Create our input data
const unsortedInputArray = [];

// seed data in unsortedInputArray
for (let i = 0; i < 10; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 10));
}

// TODO: create bubble sort function
const bubbleSort = (array) => {
  
  // for (let i = 1; i < array.length; i++) {
  //   let cur = array[i];
  //   let left = i - 1;
  //   while (left >= 0 && array[left] > cur) {
  //     array[left + 1] = array[left];
  //     left--;
  //   }
  //   array[left + 1] = cur;
  // }
  // return array;
  let swapped;
  do {
    swapped = false;
    for ( let i = 0; i < array.length -1 ; i++) {
      if (array[i] > array[i + 1])  {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
};

const sorted = bubbleSort(unsortedInputArray);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");
