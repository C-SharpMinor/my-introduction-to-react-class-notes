// **Practice Task — Controlled Item Name Input Using an Inline Arrow Function**

// In your existing React and TypeScript project:

// 1. Inside `src/controlled-inputs`, create or update `NewItemNameInput.tsx`.
// 2. Import `useState` from `"react"`.
// 3. Create an arrow function component named `NewItemNameInput`.
// 4. Inside the component, use `useState("")` to create:
//    - A state variable named `itemName`.
//    - Its setter named `setItemName`.
// 5. Make the component return a `<section>`.
// 6. Inside the section, add a `<label>`:
//    - Display **Item Name**.
//    - Set `htmlFor="itemName"`.


import { useState } from "react";

const NewItemNameInput = () => {

    const [itemName, setItemName] = useState("");

  return (
    <section>
        <label htmlFor="itemName">Item Name</label>
        <input  
        type="text"
        id="itemName"
        value={itemName}
        className="bg-green-200 border border-e-emerald-800"
        // onChange={(event) => setItemName(event.currentTarget.value)}
        onChange={(event) => {
            setItemName(event.currentTarget.value);
            console.log(event.currentTarget.value);
            
        }}

        />
        
    </section>
  )
}

export default NewItemNameInput


// 7. Below the label, add an `<input>` with:
//    - `type="text"`.
//    - `id="itemName"`.
//    - `value={itemName}` to connect the displayed text to React state.
//    - `className="bg-amber-200 border border-e-emerald-800"`.
// 8. Directly inside the input’s opening tag, add this `onChange` prop:

//    ```tsx
//    onChange={(event) => setItemName(event.currentTarget.value)}
//    ```

//    This inline arrow function receives `event`, reads the input’s current text using `event.currentTarget.value`, and passes it to `setItemName`.

// 9. Export `ItemNameInput` as the default export.
// 10. In `App.tsx`, import it from `"./controlled-inputs/ItemNameInput"` and render `<ItemNameInput />` inside `<main>`.
// 11. Save your files and open the page in the browser.
// 12. Type **Blue backpack** into the input, then delete a few characters.

// **Expected outcome:** The input displays what you type, and the `itemName` state updates whenever you type or delete characters.


