// ## Practice Task — Build a Student Profile Form

// In your existing React and TypeScript project, create a separate `StudentProfileForm` component that validates a student’s name and displays a message when the form is submitted.

// 1. Create `StudentProfileForm.tsx` inside `src/components`.
// 2. Import `useState` from React and add `import type * as React from "react";` for the event types.
// 3. Define a function component named `StudentProfileForm`. Create two state variables, both starting as empty strings:
//    - `name` and `setName` for the text in the input.
//    - `message` and `setMessage` for the feedback below the form.
// 4. Create a named function called `handleNameChange`. Type its `event` parameter as `React.ChangeEvent<HTMLInputElement>`. Use `event.currentTarget.value` to update `name`, then clear the previous feedback message.

import { useState } from "react";
import type * as React from 'react';

const StudentProfileForm = () => {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
        setMessage("");
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (name.trim() === "") {
            setMessage("Please enter your name.");
            return
        }
        setMessage(`Profile saved for ${name.trim()}`)
    }
  return (
    <section>
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} className="border border-gray-600 bg-emerald-500" />

            <button type="submit" className="bg-red-500 px-5 py-2">Save Profile</button>
        </form>
        <p>{message}</p>

    </section>
  )
}

export default StudentProfileForm



// 5. Create a named function called `handleSubmit`. Type its `event` parameter as `React.FormEvent<HTMLFormElement>`.
//    - Call `event.preventDefault()` to keep the page from reloading.
//    - Use `.trim()` to remove spaces from the beginning and end of the name.
//    - If the trimmed name is empty, display **Please enter your name.** and exit the function.
//    - Otherwise, display **Profile saved for [name].** using the trimmed name.
// 6. Make the component return a `<section>` containing a form and a feedback paragraph. Connect `handleSubmit` to the form’s `onSubmit` prop. Inside the form, add:
//    - A **Name** label with `htmlFor="name"` and a text input with `id="name"`.
//    - `value={name}` and `onChange={handleNameChange}` on the input. Leave out `required` so you can test your own validation message.
//    - A **Save Profile** button with `type="submit"`.
   
//    Below the form, display `{message}` in a paragraph.
// 7. Export `StudentProfileForm` as the default export. In `App.tsx`, import it and render `<StudentProfileForm />` inside `<main>`, below an `<h1>` that says **Student Profile**.

// ### Test your form

// | Action                                               | Expected result             |
// |------------------------------------------------------|-----------------------------|
// | Submit an empty input or one containing only spaces. | **Please enter your name.** |
// | Type `Ada` with spaces before and after it, then submit. | **Profile saved for Ada.** |
// | Edit the name after submitting. | The feedback message clears as soon as you edit the input. |