
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
interface Directors {   
    readonly firstName : string,
    readonly lastName : string,
    location : string,
    fullTimeEmployee : boolean,
    numberOfReports : number,

}