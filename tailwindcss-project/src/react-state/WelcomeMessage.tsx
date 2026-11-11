// ## Task 2 — Change a Welcome Message in a Separate React Component

// In your existing React and TypeScript project, build a `WelcomeMessage` component that changes the text in a paragraph when a button is clicked.

// ### In `src/components/WelcomeMessage.tsx`

// 1. Create a function component named `WelcomeMessage` and import `useState` from React.
// 2. Inside the component, create a state variable named `message` and a setter named `setMessage`. Set the initial message to **Click the button to see a message.**
// 3. Create a named function called `showWelcome`. Inside it, call `setMessage` to update the message to **Welcome to React!**
// 4. Return a `<section>` containing a paragraph that displays `{message}` and a **Show Welcome** button.
// 5. Pass `showWelcome` to the button’s `onClick` prop.
// 6. Export `WelcomeMessage` as the default export.
// ### In `src/App.tsx`

// 1. Import `WelcomeMessage` from `./components/WelcomeMessage`.
// 2. Inside `<main>`, display **My First State Example** in an `<h1>` and render `<WelcomeMessage />` below it.
// **Check your work:** The paragraph should initially display **Click the button to see a message.** When you click **Show Welcome**, it should display **Welcome to React!**

import { useState } from "react";

const WelcomeMessage = () => {

    // state
    const [message, setMessage] = useState("Click the button to see a message");

    // function
    const showWelcome = () => {
        setMessage("Welcome to React!")
    }

  return (
    <section>
        <p>{message}</p>

        <button
        type="button"
        onClick={showWelcome}
        >Show Welcome</button>


    </section>
  )
}

export default WelcomeMessage
