// A .tsx file contains TypeScript with JSX markup.
// Create a file named `StudentProfile.tsx` inside the `src` folder. Write a function component named `StudentProfile`. Inside it, declare `studentName` as a `string` with the value `"Temi"` and `studentAge` as a `number` with the value `22`. Return a `<section>` containing an `<h2>` displaying the student’s name and a paragraph displaying **Age:** followed by the student’s age. Export `StudentProfile` as the default export.

// function StudentProfile() {
    
//     const studName: string = "Temi";
//     const studAge: number = 22;

//     return (
//         <section>
//             <h2>{studName}</h2>
//             <p>{studAge}</p>
//         </section>
//     )
// }


// export default StudentProfile


// arrow function version using rafce
// import React from 'react'
const StudentProfile = () => {
    const studName: string = "Temi";
    const studAge: number = 22;

  return (
    <div>
           <h2>{studName}</h2>
            <p>{studAge}</p>
        
    </div>
  )
}

export default StudentProfile