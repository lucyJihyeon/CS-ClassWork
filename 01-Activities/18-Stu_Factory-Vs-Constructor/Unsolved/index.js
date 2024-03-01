const { describe } = require("node:test");

// TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }


const information = (classwork) => ({
  info: () => 
  console.log(classwork.title, classwork.description),
});

const Lesson = (title, description) => {
  const classwork = {
    title,
    description,
  };
  return { ...information(classwork)}
};

// const csForJS = new Lesson();
// csForJS.information();
const csForJS = Lesson('Module 17 - Computer Science', 'CS for JS');
csForJS.info()