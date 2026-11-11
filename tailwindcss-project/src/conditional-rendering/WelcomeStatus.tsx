// =================
// B. Using the ternary operator
// A ternary chooses between two values:
// condition ? valueWhenTrue : valueWhenFalse
// // **Practice Task — Display a Welcome Message Using the Ternary Operator**

// // 1. Create `WelcomeStatus.tsx` inside `src/conditional-rendering`.
// // 2. Define an interface named `WelcomeStatusProps` containing `isLoggedIn`, typed as `boolean`.
// // 3. Create a function component named `WelcomeStatus`. Destructure `isLoggedIn` from its props and type the props using `WelcomeStatusProps`.
// // 4. Return a `<p>` containing a ternary expression that displays **Welcome back!** when `isLoggedIn` is `true` and **Please log in.** when it is `false`.
// // 5. Export `WelcomeStatus` as the default export.
// // 6. In `App.tsx`, import `WelcomeStatus` from `"./components/WelcomeStatus"`.
// // 7. Render `<WelcomeStatus isLoggedIn={true} />` inside `<main>`.
// // 8. Save and check the browser. Change the prop to `false` and coßnfirm that the message changes.

interface WelcomeStatusProps {
    isLoggedIn: boolean;
}


const WelcomeStatus = ({isLoggedIn}: WelcomeStatusProps) => {
  return (
    <div>
        <p>{isLoggedIn ? "Welcome back, Guest!" : "Please Log In Now"}</p>
    </div>
  )
}

export default WelcomeStatus