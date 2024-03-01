const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
// TODO: Add a comment describing the purpose of this variable.
// define variable count with a value of 0 to keep track of the number of times a button is clicked. 
  let count = 0;

  // TODO: Add a comment describing what is happening. 
  //clickHandler function returns a new function 
  return function () {
  
   // TODO: Add a comment describing how this variable is being scoped. 
   // the count value is incremented by 1 when the button is clicked. 
   // and it is enclosed in the returned function 
    count++;
   // TODO: Add a comment describing how we are using the 'count' variable.
   // this refers to the button that has been clicked and the text of the button is updated everytime when it is clicked. 
   // it using template literal to convert count value to string 
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
// for every button elements, add an event listener to call clickHandler when it is clicked. 
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
