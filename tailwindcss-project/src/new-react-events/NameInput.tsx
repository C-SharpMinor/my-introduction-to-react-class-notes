// Practice Task — Log a Name as It Changes with `onChange`

// In your existing React and TypeScript project, create a separate component that logs the current text in an input as the user types or deletes characters.

// 1. Create a file named `NameInput.tsx` inside `src/components`.
// 2. Define a function component named `NameInput` that returns a text input with the placeholder **Enter your name**.
// 3. Add an `onChange` prop to the input. Pass it an inline arrow function that receives `event`.
// 4. Inside the function, use `console.log()` to display `event.currentTarget.value`.
// 5. Export `NameInput` as the default export. In `App.tsx`, import it and render `<NameInput />` inside `<main>`.
// 6. Open the browser console. Type **Ada** one letter at a time, then press **Backspace** once. Check that the console logs `A`, `Ad`, `Ada`, and `Ad` in that order.

const NameInput = () => {
  return <input 
            type="text" 
            placeholder="Enter your name" 
            onChange={event => {
                console.log(event.currentTarget.value);
                
            }}
            />
  
  
}

export default NameInput