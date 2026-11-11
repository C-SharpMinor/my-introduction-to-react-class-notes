//CHANGE EVENT
// ## Practice Task — Build a Live Student Name Preview 

// In your existing React and TypeScript project, create a separate component that displays a live preview of the student’s name as they type.

// 1. Create `StudentNamePreview.tsx` inside `src/components`.
// 2. Import `useState` from React. Add `import type * as React from "react";` so you can type the change event.
// 3. Define a function component named `StudentNamePreview`. Inside it, use `useState("")` to create `studentName` and its setter, `setStudentName`.
// 4. Define a named function called `handleNameChange`. Give it an `event` parameter typed as `React.ChangeEvent<HTMLInputElement>`. Inside the function, read the input’s current text with `event.currentTarget.value` and pass it to `setStudentName`.
// 5. Make the component return a `<section>` containing:
//    - A **Student name** label with `htmlFor="studentName"`.
//    - A text input with `id="studentName"`, `value={studentName}`, and `onChange={handleNameChange}`.
//    - A paragraph below the input that displays **Name preview:** followed by `{studentName}`.
// 6. Export `StudentNamePreview` as the default export. In `App.tsx`, import it and render `<StudentNamePreview />` inside `<main>`.
// 7. Test the component by typing **Ada** one letter at a time. Then press **Backspace** once. The preview should update from **Ada** to **Ad** immediately.

import { useState } from "react";
import type * as React from 'react';


const StudentNamePreview = () => {

    const [studentName, setStudentName] = useState("");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStudentName(event.currentTarget.value);
    }
  return (
    <section>
        <label htmlFor="studentName">Student name</label>
        <input 
        type="text"
        id="studentName"
        value={studentName}
        onChange={handleNameChange}
        className="border border-green-300 rounded-sm bg-amber-100"
        />

        <p>Name preview: {studentName}</p>
    </section>
  )
}

export default StudentNamePreview