// Practice Task 1— Workshop Registration Status**

// In your existing React and TypeScript project, create a component that allows users to open and close workshop registration.

// 1. Inside `src/react-hooks`, create a file named `RegistrationStatus.tsx`. Create the `react-hooks` folder.
// 2. Import `useState` from `"react"`.
// 3. Create a function component named `RegistrationStatus`.
// 4. Inside the component, use `useState("Registration is Closed")` to create a state variable named `status` and its setter, `setStatus`.
// 5. Create a named function called `openRegistration`. Inside it, call `setStatus` to change the status to **Registration is Open**.
// 6. Create a named function called `closeRegistration`. Inside it, call `setStatus` to change the status to **Registration is Closed**.
// 7. Make the component return a `<section>` containing an `<h2>` displaying **Coding Workshop**, a paragraph displaying `{status}`, and two buttons.
// 8. Give the first button the text **Open Registration**. Set its `type` to `"button"` and connect it to `openRegistration` using `onClick`.
// 9. Give the second button the text **Close Registration**. Set its `type` to `"button"` and connect it to `closeRegistration` using `onClick`.
// 10. Export `RegistrationStatus` as the default export.
// 11. In `App.tsx`, import `RegistrationStatus` from `"./react-hooks/RegistrationStatus"` and render `<RegistrationStatus />` inside `<main>`.
// 12. Save your changes and test both buttons in the browser.

// **Expected result:** The page initially displays **Registration is Closed**. Clicking either button changes the paragraph to the corresponding registration message.


// -----------------

// Practice Task 2 — Display the Status in the Browser Tab
// 1. Open RegistrationStatus.tsx.
// 2. Add useEffect to the React import.
// 3. Inside the component, immediately after the state declaration, add an effect that contains an arrow function structure.
// 4. Inside the effect, save the current browser tab title in a variable named previousTitle.
// 5. Set document.title to status.
// 6. Return a cleanup (arrow) function that sets document.title back to previousTitle.
// 7. Give the effect a dependency array containing status.
// 8. Save the file. Click both registration buttons and watch the browser tab.


// Practice Task 3 — Show Mounting and Unmounting
// 1. Open RegistrationStatus.tsx
// 2. Import useState.
// 3. Inside RegistrationStatus.tsx, create showRegistration and setShowRegistration using useState(true).
// 4. Write a named function called toggleRegistration.
// 5. Inside it, write setShowRegistration(previous => !previous).
// 6. Add a button labelled Show or Hide Registration. Connect it to toggleRegistration.
// 7. Render the registration component only when showRegistration is true.
// 8. Open registration, hide the component, then show it again.


// Practice Task 4 — Focus the Name Input
// 1. Open RegistrationStatus.tsx.
// 2. Add useRef to the React import.
// 3. Inside the component, create nameInputRef using useRef<HTMLInputElement>(null).
// 4. Create a named function called focusNameInput.
// 5. Inside the function, write nameInputRef.current?.focus().
// 6. Below the registration buttons, add a <div>.
// 7. Inside the <div>, add a label displaying Full Name. Give it htmlFor="fullName".
// 8. Add a text input with id="fullName" and ref={nameInputRef}.
// 9. Add a button labelled Focus Name Field. Give it type="button" and connect it to focusNameInput.
// 10. Click the button, then start typing.

// FEEDBACK ON TASK 4:
// Clicking Focus Name Field moves the cursor into the Full Name input. The user can immediately start typing without clicking inside the input first.
// The button’s handler uses nameInputRef.current?.focus() to focus that input.
// Click Focus Name Field, then start typing. The cursor moves into the input because nameInputRef.current holds that input element.


// Practice Task 5 WAS CREATING THE CUSTOM HOOK;

// Practice Task 6 — Use the Custom Hook
// 1. Open RegistrationStatus.tsx.
// 3. Import useRegistrationStatus from "./hooks/useRegistrationStatus".
// 4. Replace the component’s useState declaration with the line below.
//    const {
//      status,
//      openRegistration,
//      closeRegistration,
//    } = useRegistrationStatus();
// 5. Remove the openRegistration and closeRegistration function definitions from the component because the hook now supplies them.
// 6. Keep the effect, ref, focus handler and JSX in place.
// 7. Test all three buttons again.
// Expected result: The registration buttons, browser tab title and focus button still work.


// TASK/STEP 4 - Add useRef to react
import { useState, useRef } from "react";
import useRegistrationStatus from "./useRegistrationStatus";


const RegistrationStatus = () => {
    //  The react state is removed to be added in custom hook. Then, it is imported from the custom hook as an object introduced using const
    // set state variable and setter with usestatae having a default value
    // const [status, setStatus] = useState("Registration is Closed");
    const {
     status,
     openRegistration,
     closeRegistration,
   } = useRegistrationStatus();



    // TASK/STEP 3: Mount and unmount - 1. show/hide Registration - Add the visibility state and toggle function
    // 1. First, create visibility showRegistration state and its setter
    const [showRegistration, setShowRegistration] = useState(true);

     // STEP 4: ii. create Ref for the name input 
    const nameInputRef = useRef<HTMLInputElement>(null); 
    
      // 2. secondly, create toggleRegistration function
    const toggleRegistration = () => {
        setShowRegistration(previous => !previous);
    }


//   //  Task 2 - Step 2: Use Effect Beginning
//     useEffect(() => {
//         const previousTitle = document.title;
//         document.title = status;

//         // return a cleanup arrow function - sets document.title back to previousTitle
//        return () => {
//         document.title = previousTitle;
//        };
//     }, [status]); // Giving the effect a dependency array containing status. End of use effect.

    // These also removed and added in the custom hook
    // const openRegistration = () => {
    //     setStatus("Registration is Open");
    // }

    // const closeRegistration = () => {
    //     setStatus("Registration is Closed");
    // }

    // STEP 4: iii. create a focus arrow function to focus the name input when the button is clicked.
    const focusNameInput = () => {
        nameInputRef.current?.focus();
    }


  return (
    <div>
         {/* 3 and 4  third, make sure a div contains the toggle and section as separate divisions. Fourth, create hide/show registration button  */}
        <button type="button"
        onClick={toggleRegistration}
        className="bg-indigo-500 px-5 py-2 text-white rounded-sm mb-3"
        >
            Show or Hide Registration
        </button>
         {/*5. fifth, use && logical operator to combine showregistrtaion and section */}

         {showRegistration && (
                <section>
            <h2>Coding Workshop</h2>
            <p>{status}</p>

            <button 
            type="button"
            onClick={openRegistration}
            className="bg-blue-600 text-white px-5 py-2 mb-2 block"
            >Open Registration
            </button>

            <button 
            type="button"
            onClick={closeRegistration}
            className="bg-yellow-600 text-white px-5 py-2 mb-2 block"
            >Close Registration</button>


            {/* STEP 4 iv. Create the name input and button that will focus it */}
            <div >
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" ref={nameInputRef} className="bg-cyan-600 border border-b-amber-600"/>

                <button type="button" onClick={focusNameInput} className="bg-amber-400 px-5 py-2">Focus Name Field</button>
            </div>
        </section>
         )}
        </div>
  );
}

export default RegistrationStatus