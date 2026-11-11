// Practice Task — Log a Key Press with `onKeyDown`

// In your existing React and TypeScript project, create a separate component that logs which key the user presses while the input is focused.
// 1. Create `src/components/KeyDownExample.tsx`.
// 2. Define a function component named `KeyDownExample`.
// 3. Make the component return a text input with the placeholder **Press a key**.
// 4. Add an `onKeyDown` prop to the input. Pass it an inline arrow function that receives `event`.
// 5. Inside the function, use `event.key` and `console.log()` to display the key pressed. For example, pressing `a` should log **You pressed: a**.
// 6. Export `KeyDownExample` as the default export. Import it into `App.tsx` and render `<KeyDownExample />` inside `<main>`.
// 7. Open the browser console, click inside the input, and test it with a letter and the Enter key.


const KeyDownExample = () => {
  return <input 
            type="text" 
            placeholder="Press a key" 
            onKeyDown={event => {
                console.log(`You pressed: ${event.key}`);
                
            }}         
         />
}

export default KeyDownExample