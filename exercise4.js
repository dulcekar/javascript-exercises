console.log("Exercise #4");

/* let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/
const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];

const commonCourse = student1Courses.filter( course1 =>  student2Courses.includes(course1) );
console.log( `El curso que comparten es: ${commonCourse}` );