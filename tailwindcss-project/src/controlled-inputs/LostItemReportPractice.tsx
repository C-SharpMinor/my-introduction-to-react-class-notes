// Practice Task — Controlled Form Using Inline Arrow Functions and `.map()`

// In your existing React and TypeScript project:

// 1. Inside `src/controlled-inputs`, create or update `LostItemReportPractice.tsx`.

// 2. Import `useState` from `"react"`.

// 3. Create a function component named `LostItemReportForm`.

// 4. Inside the component, create these state variables:

//    | State | Setter | Initial value |
//    |---|---|---|
//    | `itemName` | `setItemName` | `""` |
//    | `contactEmail` | `setContactEmail` | `""` |
//    | `location` | `setLocation` | `""` |
//    | `isConfirmed` | `setIsConfirmed` | `false` |

// 5. Create an array named `locations` containing these objects:

//    | value | label |
//    |---|---|
//    | `""` | Choose a location |
//    | `"classroom"` | Classroom |
//    | `"library"` | Library |
//    | `"cafeteria"` | Cafeteria |
//    | `"computer-lab"` | Computer Lab |

import { useState } from "react";

const LostItemReportPractice = () => {

    const [itemName, setItemName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [location, setLocation] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false);

    const locations = [
        { value: "", label: "Choose a location" },
        { value: "classroom", label: "Classroom" },
        { value: "library", label: "Library" },
        { value: "cafeteria", label: "Cafeteria" },
        { value: "computer-lab", label: "Computer Lab" },
    ];

  return (
    <div>
        <form>
            <h1>Report a Lost Item</h1>

            <label htmlFor="itemName">Item Name</label>
            <input 
            type="text"  
            id="itemName"
            value={itemName}
            onChange={(event) => setItemName(event.currentTarget.value)}
            />
            <p>Item preview</p>
            <p>{itemName}</p>

            <label htmlFor="contactEmail">Contact Email</label>
            <input 
            type="email"  
            id="contactEmail"
            value={contactEmail}
            onChange={(event) => setContactEmail(event.currentTarget.value)}
            />

            <label htmlFor="location">Last seen location</label>
            <select
            id="location"
            value={location}
            onChange={(event) => setLocation(event.currentTarget.value)}
            >  
            {locations.map(place => (
                <option 
                key={place.value}
                value={place.value}
                >{place.label}</option>
            ))

            }
            </select>


            <input 
            type="checkbox" 
            id="isConfirmed" 
            checked={isConfirmed} 
            onChange={(event) => setIsConfirmed(event.currentTarget.checked)}
            />
            <label htmlFor="isConfirmed"> I confirm these details are accurate</label>   
            <p>{isConfirmed ? "Details confirmed" : "Please confirm your details"}</p>      
        </form>  
    </div>
  )
}

export default LostItemReportPractice


// 6. Return a `<form>` containing a heading displaying **Report a Lost Item**.

// 7. Add these fields. Connect each label to its field using matching `htmlFor` and `id` values:

//    | Label | Element | id | Controlled prop |
//    |---|---|---|---|
//    | Item name | `<input type="text">` | `itemName` | `value={itemName}` |
//    | Contact email | `<input type="email">` | `contactEmail` | `value={contactEmail}` |
//    | Last seen location | `<select>` | `location` | `value={location}` |
//    | I confirm these details are accurate | `<input type="checkbox">` | `isConfirmed` | `checked={isConfirmed}` |

// 8. Add an **inline arrow function directly inside each field’s `onChange` prop**, using the following code.

//    For the **item name input**:

//    ```tsx
//    onChange={(event) => setItemName(event.currentTarget.value)}
//    ```

//    For the **contact email input**:

//    ```tsx
//    onChange={(event) => setContactEmail(event.currentTarget.value)}
//    ```

//    For the **location select**:

//    ```tsx
//    onChange={(event) => setLocation(event.currentTarget.value)}
//    ```

//    For the **confirmation checkbox**:

//    ```tsx
//    onChange={(event) => setIsConfirmed(event.currentTarget.checked)}
//    ```

//    Use `.value` for the text input, email input, and dropdown. Use `.checked` for the checkbox.

// 9. Inside the `<select>`, use `locations.map()` with `place` as the callback parameter. Return an `<option>` for each object:
//    - Set `key={place.value}`.
//    - Set `value={place.value}`.
//    - Display `{place.label}` between the opening and closing `<option>` tags.

// 10. Below the item name input, display a paragraph containing **Item preview:** followed by `{itemName}`.

// 11. Below the checkbox, use a ternary expression inside a paragraph to display:
//     - **Details confirmed** when `isConfirmed` is `true`.
//     - **Please confirm your details** otherwise.

// 12. Export `LostItemReportPractice` as the default export.

// 13. In `App.tsx`, import it from `"./controlled-inputs/LostItemReportPractice"` and render `<LostItemReportForm />` inside `<main>`.

// 14. Save your changes and test the form in the browser.

// Expected outcome: The item preview updates as you type, the dropdown displays the mapped location options, and the confirmation message changes when you check or uncheck the checkbox.