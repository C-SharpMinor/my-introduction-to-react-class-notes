// Page 1 — `Registration.tsx`

// 1. Inside `src/registration-pages`, create `Registration.tsx`.
// 2. Import `useNavigate` from `"react-router"`.
// 3. Create a function component named `Registration`.
// 4. Inside the component, call `useNavigate()` and store the returned function in `navigate`.
// 5. Create a named function called `handleRegistration`.
// 6. Inside the function:
//    - Display Registration completed! using `console.log()`.
//    - Call `navigate("/registration-success")`.
// 7. Return a `<section>` containing:
//    - An `<h1>` displaying **Workshop Registration**.
//    - A paragraph displaying Click the button to complete your registration.
//    - A button displaying Complete Registration.
// 8. Give the button `type="button"` and connect `handleRegistration` to its `onClick`.
// 9. Export `Registration` as the default export.

import { useNavigate } from "react-router";

// import React from 'react'

const Registration = () => {

    const navigate = useNavigate();

    const handleRegistration = () => {
        console.log("Registration completed!");
        navigate("/registration/success");
    };
  return (
    <section className="bg-pink-300 p-5 mx-auto w-full max-w-2xl">
        <h1>Workshop Registration</h1>

        <p>Click the button to complete your registration.</p>

        <button 
        type="button" 
        onClick={handleRegistration}
        className="bg-amber-200 text-red-500 px-5 py-2 rounded-lg cursor-pointer hover:bg-amber-300"
        >
            Complete Registration
        </button>

    </section>
  )
}

export default Registration


