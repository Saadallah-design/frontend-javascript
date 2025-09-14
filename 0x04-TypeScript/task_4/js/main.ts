// create and export a constant cpp for Cpp Subject
import { Cpp } from './subjects/Cpp';

export const cpp = new Cpp();
// create and export a constant java for Java Subject
import { Java } from './subjects/Java';

export const java = new Java();
// create and export a constant react for React Subject
import { React } from './subjects/React';

export const react = new React();
// create and export a constant cpp for Cpp Subject
// create and export a constant java for Java Subject
// create and export a constant react for React Subject

// create and export one Teacher object cTeacher with experienceTeachingC = 10
import { TeacherInterface } from './subjects/Teacher';

export const cTeacher: TeacherInterface = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};

// for Cpp Subject, log to the console C++, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
// print the string they return to the console


// for Java
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());


// for React
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

// create and export one Teacher object javaTeacher with experienceTeachingJava = 5
export const javaTeacher: TeacherInterface = {
    firstName: 'Jane',
    lastName: 'Smith',
    experienceTeachingJava: 5,
};