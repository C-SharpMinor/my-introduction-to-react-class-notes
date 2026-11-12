// ractice Task — Create a Controlled Confirmation Checkbox

// In your existing React and TypeScript project, create a separate component whose checkbox is controlled by React state.
// 1. Inside src/controlled-inputs, create ConfirmationCheckbox.tsx.
// 2. Import useState from "react" and add import type * as React from "react";.
// 3. Create a function component named ConfirmationCheckbox.
// 4. Inside the component, use useState(false) to create isConfirmed and its setter, setIsConfirmed.
// 5. Create a named function called handleConfirmationChange. Give it an event parameter typed as React.ChangeEvent<HTMLInputElement>.
// 6. Inside the handler, pass event.currentTarget.checked to setIsConfirmed.

import { useState } from "react";
import type * as React from "react";


const ConfirmationCheckbox = () => {

    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirmationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsConfirmed(event.currentTarget.checked);
    }
  return (
    <section>
        <input 
        type="checkbox" 
        id="confirmation"
        checked={isConfirmed}
        onChange={handleConfirmationChange} />
        <label htmlFor="confirmation">I confirm that the information is correct.</label>
    </section>
  )
}

export default ConfirmationCheckbox


// 7. Make the component return a <section> containing a checkbox input and a label displaying I confirm that the information is correct.
// 8. Give the input type="checkbox" and id="confirmation". Give the label htmlFor="confirmation".
// 9. Set the input’s checked prop to {isConfirmed} and its onChange prop to {handleConfirmationChange}.
// 10. Export the component using export default ConfirmationCheckbox at the bottom.
// 11. In App.tsx, import it from "./controlled-inputs/ConfirmationCheckbox" and render <ConfirmationCheckbox /> inside <main>.
// 12. Save your files. Click the checkbox to select it, then click it again to clear it.
// Expected result: The checkbox starts unchecked. Selecting it updates isConfirmed to true. Clearing it updates isConfirmed to false.

// Reflection question — Which prop connects the checkbox’s selected state to isConfirmed?