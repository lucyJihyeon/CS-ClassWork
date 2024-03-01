// // function to block the stack for x number of milliseconds
// const pause = milliSeconds => {
//   // get the current time
//   var startTime = new Date().getTime(); 
//   // block stack until time's up
//   while (new Date().getTime() < startTime + milliSeconds); 
// }

// pause(8000);

const submitBtn = document.querySelector('.btn');
submitBtn.disabled = true;

const pause = (milliseconds) => {
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.addEventListener("click", submitHandler);
  }, milliseconds)
};

const submitHandler = (e) => {
  e.preventDefault();
  window.alert("Successfully submitted!");
}

pause(5000)
