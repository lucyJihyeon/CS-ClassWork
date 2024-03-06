// Create our input data
const unsortedInputArray = [];
// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create quick sort function
const quickSort = (array, left = 0, right = array.length - 1) => {
  //selecting a pivot randomly
  //selecting a pivot (start, middle, end)
  //selecting a pivot at the end
  
  if (left < right) {
    let pivot = partition(array, left, right);
    //sorting the left 
    quickSort(array,left, pivot - 1 );
    //sorting the right
    quickSort(array, pivot + 1, right);
  }
  return array;
};

function partition(array,left, right) {
  let pivot = array[right];
  let i = left -1;
  // Rearrange the array by placing elements which are less than the pivot
  // to the left of the pivot and greater elements to the right
  for (let j = left; j < right; j++) {
    if (array[j] <= pivot) {
      i++;
      // Swapping elements
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Swap the pivot element with the element at i+1 position
  [array[i + 1], array[right]] = [array[right], array[i + 1]];
  // Return the partitioning index
  return i + 1; 
}

const sorted = quickSort(unsortedInputArray);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");
