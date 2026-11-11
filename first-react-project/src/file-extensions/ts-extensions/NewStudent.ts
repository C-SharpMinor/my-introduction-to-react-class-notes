// Practice Task: Export and Import Student Information**

// 1. Inside your project’s `src` folder, create a file named `NewStudent.ts`.
// 2. Declare and export these constants:
//    - `studentName`: explicitly typed as `string`, with the value `"Fola"`.
//    - `studentAge`: explicitly typed as `number`, with the value `31`.
// 3. In `App.tsx`, import both constants from `"./student"` using a named import.
// 4. Create an `App` function component that returns a `<section>` containing:
//    - An `<h1>` displaying the student’s name.
//    - A paragraph displaying **Age:** followed by the student’s age.
// 5. Export `App` as the default export.
// 6. Save both files and confirm that **Lola** and **Age: 31** appear in the browser.


export const studentName: string = "Fola";
export const studentAge: number = 31;