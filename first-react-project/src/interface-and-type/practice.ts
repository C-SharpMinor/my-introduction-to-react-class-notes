// Practice question: Describe a student
// In a TypeScript file, write code to:

// 1. Create an interface named `Student` containing:
//    - `name`, which must be a string.
//    - `age`, which must be a number.
//    - `isEnrolled`, which must be a Boolean.
// 2. Create an object called `studentOne` that follows this interface.
// 3. Display the student’s details in the console.
// 4. Rewrite the interface as a type alias named `StudentDetails`.
// 5. Create another object called `studentTwo` using that type.

// You can practise in a `practice.ts` file in your TypeScript project.

// LET'S BEGIN WITH CREATING AN OBJECT

const student = {
    name: "Bukola",
    age: 25,
    isEnrolled: true
};

// This object has three properties:

// | Property      | Value     | Type     |
// |---------------|-----------|----------|
// | `name`        | `"Bukola"`| `string` |
// | `age`         | `25`      | `number` |
// | `isEnrolled`  | `true`    | `boolean`|

// TypeScript can infer these types automatically. However, when several objects should follow the same structure, we can describe that structure once and give it a name.


// Use the `interface` keyword:
// interface Student {
//     name: string;
//     age: number;
//     isEnrolled: boolean;
// }


// Read it as:

// “A Student object must have a name containing text, an age containing a number, and an isEnrolled property containing true or false.”

// Break down the syntax:

// | Part           | Meaning                               |
// |----------------|---------------------------------------|
// | `interface`    | Introduces an interface               |
// | `Student`      | The name we chose for the structure   |
// | `{ }`          | Contains the property descriptions    |
// | `name: string` | The `name` property must contain text |
// | `;`            | Separates the property descriptions   |

// Use PascalCasefor interface and type names: `Student`, `StudentDetails`, or `CourseDetails`.

// The interface describes the object. It does not create an object or store student details.


// 3. Create an object using the interface
// const studentOne: Student = {
//     name: "Bukola",
//     age: 21,
//     isEnrolled: true
// }

// console.log(studentOne);


// We can make a property optional using question mark (?)
// By default, the properties we have described are required.
// Add `?` after a property name to make it optional:
interface Student {
    name?: string;
    age: number;
    isEnrolled: boolean;
}


// 3. Create an object using the interface with isEnrolled as optional
const studentOne: Student = {
    // name: "Bukola",
    age: 21,
    isEnrolled: true
};

console.log(studentOne);


// USING TYPE
type StudentDetails = {
    name: string;
    age?: number;
    isEnrolled: boolean;
};

const studentTwo: StudentDetails = {
    name: "Titi",
    isEnrolled: false
 }

 console.log(studentTwo);
 

//  NOTE: A type alias can describe more than an object. For example:

// A union type allows a value to be one of two or more types. Use the pipe symbol | to separate the options.

// EXAMPLE 1: 
let studentId: string | number;
studentId = 101;  //valid
studentId = "STU101"; //valid
studentId = true; //error


// EXAMPLE 2:
type EnrollmentStatus = "pending" | "enrolled" | "withdrawn";
let  status: EnrollmentStatus = "pending";
status = "enrolled"; //valid
status = "completed"; //Error






export {};

