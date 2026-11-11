// MOUSE EVENT
// ## Practice Task — Display a Button’s Name When Clicked 

// In your existing React and TypeScript project, create a separate component that reads a button’s `name` from the click event and displays a message on the page.

// 1. Create `ChooseReactButton.tsx` inside `src/components`.
// 2. Import `useState` and use `import type * as React from "react";` for the event type.
// 3. Define a function component named `ChooseReactButton`. Inside it, use `useState("")` to create a `message` state variable and its setter, `setMessage`.
// 4. Define a named function called `handleClick`. Give it an `event` parameter typed as `React.MouseEvent<HTMLButtonElement>`.
// 5. Inside `handleClick`, read the button’s name using `event.currentTarget.name`. Use `setMessage` to display **You clicked** followed by that name.
// 6. Make the component return a `<section>` containing:
//    - A button with `type="button"`, `name="the React button"`, and the visible text **Choose React**. Pass `handleClick` to its `onClick` prop.
//    - A paragraph below the button that displays `{message}`.
// 7. Export `ChooseReactButton` as the default export. In `App.tsx`, import it and render `<ChooseReactButton />` inside `<main>`.
// 8. Open the page. Check that the paragraph is empty at first. Click **Choose React** and confirm that the page displays **You clicked the React button**.

import { useState } from "react";
import type * as React from "react";

const ChooseReactButton = () => {

    const [message, setMessage] = useState("");

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMessage(`You clicked: ${event.currentTarget.name}`)
    }

  return (
    <section>
        <button 
        type="button" 
        name="the React button"
        onClick={handleClick}
        >Choose React</button>

        <p>{message}</p>
        
    </section>
  )
}

export default ChooseReactButton