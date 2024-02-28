// 1) Where is carNoise stored?
//carNoise is stored in the global execution context 
const carNoise = 'Honk';
// 2) Where is goFast stored?
// goFast is stored in the global execution 
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // spped is assinged a value when a user confirms the prompt (Do you want to go fast) 
  // the value (80) is stored in the local execution context of the goFast function call
  
  // 5) Where is makeNoise stored?
  //makeNoise is stored in the function executioin context of function goFast.
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // it will call makeNoise function which already has its speed value of 80 and it will use the 
  //carNoise value stored in the global execution (Honk). so, it logs 
  //My speed is at 80, time to Honk
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// when user confirms to the prompts, call goFast function with a speed value of 80 as an argument
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
