
interface Teacher {
    readonly firstName : string, // using readonly before the property name 
                                 // prevents the property from being assigned 
                                 // a new value after the object is first initialized
    fullTimeEmployee : boolean,
    readonly lastName : string,
    yearsOfExperience? : number,
    location : string,
    contract : any,

    // creating an index-key to allow addition of any other attribute
    // flexible index signature below
    [key: string]: any;

}

// creating Directors interface
// extending on the teachers interface
interface Directors extends Teacher {   
    numberOfReports : number;
}

// Example usage of the Directors interface
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  // Log the director object to the console
console.log(director1);

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
// Implement the function that matches the interface
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    const firstLetter = firstName.charAt(0);
    return `${firstLetter}. ${lastName}`;
  };
  
  // Example usage
  console.log(printTeacher("John", "Doe"));