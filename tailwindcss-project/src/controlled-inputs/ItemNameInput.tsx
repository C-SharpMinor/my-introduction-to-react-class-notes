// Practice Task — Create a Controlled Item Name Input


// In your existing React and TypeScript project, create a separate component whose text input is controlled by React state.

// 1. Inside `src/controlled-inputs`, create `ItemNameInput.tsx`.
// 2. Import `useState` from `"react"` and add `import type * as React from "react";`.
// 3. Create a function component named `ItemNameInput`.
// 4. Inside the component, use `useState("")` to create `itemName` and its setter, `setItemName`.
// 5. Create a named function called `handleItemNameChange`. Give it an `event` parameter typed as `React.ChangeEvent<HTMLInputElement>`.
// 6. Inside the handler, pass `event.currentTarget.value` to `setItemName`.
// 7. Make the component return a `<section>` containing a label displaying **Item name** and a text input.
// 8. Give the input `id="itemName"` and the label `htmlFor="itemName"`.
// 9. Set the input’s `value` to `{itemName}` and its `onChange` to `{handleItemNameChange}`.

import { useState } from "react";
import type * as React from "react";


// import React from 'react'

const ItemNameInput = () => {

    const [itemName, setItemName] = useState("");

    const handleItemNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(event.currentTarget.value);
        console.log(event.currentTarget.value);
        
    }

  return (
    <section>
        <label htmlFor="itemName">Item name</label>
        <input 
        type="text" 
        id="itemName" 
        value={itemName}
        onChange={handleItemNameChange}
        className="bg-amber-500 border border-b-emerald-900"
        />

    </section>
  )
}

export default ItemNameInput



// 10. Export `ItemNameInput` as the default export.
// 11. In `App.tsx`, import it from `"./controlled-inputs/ItemNameInput"` and render `<ItemNameInput />` inside `<main>`.
// 12. Save your files. Type **Blue backpack** into the input, then delete a few characters to check that it updates.


// const [itemName, setItemName] = useState("");

// function handleItemNameChange(
//   event: React.ChangeEvent<HTMLInputElement>
// ) {
//   setItemName(event.currentTarget.value);
// }



// <input
//   type="text"
//   value={itemName}
//   onChange={handleItemNameChange}
// />


// 1. `itemName` starts as an empty string.
// 2. `value={itemName}` tells the input what to display.
// 3. Typing runs `handleItemNameChange`.
// 4. `event.currentTarget.value` reads the current text.
// 5. `setItemName()` updates the state, and React updates the display.