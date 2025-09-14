/**
 * Interface: A contract that defines what properties an object MUST have
 * Think of it like a blueprint or template for objects
 */
interface Student {
    firstName: string
    lastName: string;
    age: number;
    location: string;
    // Optional property example: location?: string (the ? makes it optional)
}

/**
 * Object Creation with Type Safety
 * The `: Student` tells TypeScript "this object must match the Student interface"
 * If we miss a property or use wrong types, TypeScript will show an error
 */
const student1: Student = {
    firstName: "James",     // ✅ String - matches interface
    lastName: "Adams",      // ✅ String - matches interface  
    age: 20,               // ✅ Number - matches interface
    location: "Morocco"    // ✅ String - matches interface
};

const student2: Student = {
    firstName: "Henry",
    lastName: "Lovable", 
    age: 22,
    location: "Morocco"
};


// Array Type Annotation: Student[]
// This means "an array that can only contain Student objects"
// Benefits:
// - TypeScript ensures all items match Student interface
// - IDE provides autocomplete for Student properties
// - Prevents adding wrong types to array

const studentsList: Student[] = [student1, student2];

function renderTable(): void {  // ← Return type annotation (void = returns nothing)
    
    // DOM MANIPULATION - GETTING ELEMENTS
 /**
 * document.body returns HTMLElement | null
 * The | means "union type" - it could be HTMLElement OR null
 * 
 * Why null? Because the body might not exist yet when script runs
 * We handle this with an if statement later
 */
    const body: HTMLElement | null = document.body;
    // Alternative: document.querySelector('body') - more explicit but same result
    
    // DOM MANIPULATION - CREATING ELEMENTS    
    /**
     * createElement() returns specific HTML element types
     * - HTMLTableElement for 'table'
     * - HTMLTableSectionElement for 'thead', 'tbody'
     * - HTMLTableRowElement for 'tr'
     * - HTMLTableCellElement for 'td', 'th'
     * 
     * TypeScript knows the exact type and provides appropriate methods/properties
     */
    const table: HTMLTableElement = document.createElement('table');
    const tableHead: HTMLTableSectionElement = document.createElement('thead');
    const tableBody: HTMLTableSectionElement = document.createElement('tbody');
   
    // CREATING TABLE HEADER STRUCTURE    
    /**
     * Building semantic HTML structure:
     * table
     * ├── thead
     * │   └── tr (header row)
     * │       ├── th (First Name)
     * │       └── th (Location)
     * └── tbody
     *     ├── tr (student 1 row)
     *     └── tr (student 2 row)
     */
    
    const headerRow: HTMLTableRowElement = document.createElement('tr');
    
    // Creating first header cell
    const header1: HTMLTableCellElement = document.createElement('th');
    header1.textContent = 'First Name';  // textContent is safer than innerHTML
    header1.style.border = '1px solid black';
    header1.style.padding = '8px';       // padding makes it look better
    
    // Creating second header cell
    const header2: HTMLTableCellElement = document.createElement('th');
    header2.textContent = 'Location';
    header2.style.border = '1px solid black';
    header2.style.padding = '8px';
    
    // DOM TREE BUILDING - PARENT-CHILD RELATIONSHIPS    
    /**
     * appendChild() creates parent-child relationships in the DOM
     * Think of it like building a family tree:
     * - headerRow becomes parent of header1 and header2
     * - tableHead becomes parent of headerRow
     */
    headerRow.appendChild(header1);  // header1 becomes child of headerRow
    headerRow.appendChild(header2);  // header2 becomes child of headerRow
    tableHead.appendChild(headerRow); // headerRow becomes child of tableHead
    
    // ARRAY ITERATION WITH TYPE SAFETY    
    /**
     * forEach() with TypeScript:
     * - studentsList is Student[], so each item in loop is type Student
     * - (student: Student) is explicit type annotation (optional but good practice)
     * - Without annotation, TypeScript would infer the type anyway
     * 
     * Arrow function anatomy:
     * (parameter: Type) => { code to execute }
     */
    studentsList.forEach((student: Student) => {
        
        // CREATING DATA ROWS DYNAMICALLY        
        /**
         * For each student, we create a new table row with two cells
         * This demonstrates dynamic DOM creation based on data
         */
        const row: HTMLTableRowElement = document.createElement('tr');
        
        // First cell: Student's first name
        const firstNameCell: HTMLTableCellElement = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        firstNameCell.style.border = '1px solid black';
        firstNameCell.style.padding = '8px';
        
        // Second cell: Student's location
        const locationCell: HTMLTableCellElement = document.createElement('td');
        locationCell.textContent = student.location;    // TypeScript knows location exists and is string
        locationCell.style.border = '1px solid black';
        locationCell.style.padding = '8px';
        
        // BUILDING ROW STRUCTURE        
        /**
         * Each row gets two cells appended to it
         * Then the complete row gets appended to the table body
         * 
         * Structure being built:
         * tbody
         * ├── tr (row for James)
         * │   ├── td (James)
         * │   └── td (Morocco)
         * └── tr (row for Henry)
         *     ├── td (Henry)
         *     └── td (Morocco)
         */
        row.appendChild(firstNameCell);   // Add first name cell to row
        row.appendChild(locationCell);    // Add location cell to row
        tableBody.appendChild(row);       // Add complete row to table body
        
        // Note: We append to tableBody, not table directly
        // This creates proper semantic HTML structure
    });

    // ASSEMBLING THE COMPLETE TABLE    
    /**
     * Final table structure assembly:
     * We built the pieces separately, now combine them
     * 
     * Final structure:
     * table
     * ├── thead (contains header row)
     * └── tbody (contains data rows)
     */
    table.appendChild(tableHead);  // Add header section to table
    table.appendChild(tableBody);  // Add body section to table
    
    // NULL CHECKING - DEFENSIVE PROGRAMMING    
    /**
     * Type Guard: if (body) checks if body is not null
     * 
     * Why necessary?
     * - document.body could be null if script runs before </body>
     * - TypeScript forces us to handle this possibility
     * - Prevents runtime errors
     * 
     * Type narrowing: Inside the if block, TypeScript knows body is HTMLElement (not null)
     */
    if (body) {  // Type guard - ensures body is not null
        body.appendChild(table);  // Now TypeScript knows body is safe to use
        // Inside this block: body is HTMLElement
    }
    // Outside this block: body could still be HTMLElement | null
    
} // ← Function scope ends here - all variables created inside are destroyed

// ==========================================
// FUNCTION INVOCATION - ACTUALLY RUNNING THE CODE
// ==========================================

/**
 * Function Declaration vs Function Invocation:
 * - Above we DECLARED the function (wrote the code)
 * - Here we INVOKE/CALL the function (actually run the code)
 * 
 * Without this line, the function exists but never runs!
 * 
 * Function call syntax: functionName()
 * The () tells JavaScript to execute the function
 */
renderTable(); // ← This actually executes all the code above

// ==========================================
// TYPESCRIPT COMPILATION PROCESS
// ==========================================

/**
 * What happens when you run this code:
 * 
 * 1. TypeScript Compiler (tsc):
 *    - Checks all type annotations
 *    - Verifies interface compliance
 *    - Reports any type errors
 *    - Converts TypeScript to JavaScript
 * 
 * 2. Webpack:
 *    - Bundles the compiled JavaScript
 *    - Handles dependencies
 *    - Optimizes the code
 *    - Creates final bundle.js
 * 
 * 3. Browser:
 *    - Loads bundle.js
 *    - Executes renderTable()
 *    - Creates DOM elements
 *    - Displays the table
 * 
 * The type annotations are removed in the final JavaScript - they're only for development!
 */