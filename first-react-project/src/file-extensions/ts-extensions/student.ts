// A `.ts` file contains TypeScript without JSX markup.
// Practice Task: Create a TypeScript File
// 1. Inside your project’s src folder, create a file named student.ts inside the ts-extensions folder.
// 2. Declare a constant named studentName, explicitly type it as string, and assign it "Lola".
// 3. Declare a constant named studentAge, explicitly type it as number, and assign it 22.
// 4. Use console.log() to display each value separately.
// 5. Add export {}; at the bottom to make the file a module.
// 6. Save the file.

//Declare a constant named studentName
const studentName: string = "Lola";
const studentAge: number = 22;

// Use console.log() to display each value separately.
console.log(studentName);
console.log(studentAge);

// Make the file a module.
export {};


// export {}; makes the file a module. Your import connects that file to the running application, which is why its messages appear in the console.

// A module is a file whose code has its own scope and can share selected values with other files.

// “Own scope” means its variables belong to that file. Another file can use the same variable names without a conflict.



