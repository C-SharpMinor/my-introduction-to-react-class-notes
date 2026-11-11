// ====================
// USING IF.... ELSE
//Practice Task — Display a Login Message Using `if...else`**

// In your existing React and TypeScript project, create a separate component that displays a message based on whether a user is logged in.

// 1. Inside `src/conditional-rendering`, create a file named `LoginMessage.tsx`.
// 2. Define an interface named `LoginMessageProps` containing `isLoggedIn`, typed as `boolean`.
// 3. Create a function component named `LoginMessage`. Destructure `isLoggedIn` from its props and use `LoginMessageProps` to type the props.
// 4. Inside the component, write an `if...else` statement. If `isLoggedIn` is `true`, return a paragraph displaying **Welcome back!** Otherwise, return a paragraph displaying **Please log in.**
// 5. Export `LoginMessage` as the default export.
// 6. In `App.tsx`, import `LoginMessage` from `"./components/LoginMessage"`.
// 7. Make `App` return a `<main>` containing `<LoginMessage isLoggedIn={true} />`.
// 8. Save your files and confirm that **Welcome back!** appears in the browser.
// 9. Change the prop to `isLoggedIn={false}`, save, and confirm that **Please log in.** appears.

// Reflection question — Why do we write `isLoggedIn={true}` with curly braces?

interface LoginMessageProps {
    isLoggedIn: boolean;
}


const LogInMessage = ({isLoggedIn}: LoginMessageProps) => {
    if (isLoggedIn === true) {
        return <p>Welcome back!</p>
    } else {
        return <p>Please log in.</p>
    }

}

export default LogInMessage