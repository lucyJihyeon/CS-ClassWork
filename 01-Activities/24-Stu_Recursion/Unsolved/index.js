// TODO: Add a comment describing what the `position` parameter means for this function.
//index of the fibonacci sequence. 
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  //the purpose of this if statement is to stop the recursion when it hits the first two values of the fibonacci sequence.
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  // Returns the sum of the Fibonacci numbers of the two previous positions.
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
// This will return the value of the Fibonacci sequence at the 9th position, which is 34.
console.log(fibonacci(9));
