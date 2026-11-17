// 3. Create the page and its data

// Inside `src/pages/PropertyPage.tsx`:

// 1. Import `useState` from `"react"`.
// 2. Import `PropertyCard` from `"../components/PropertyCard"`.
// 3. Import the `Property` interface using:
//    import type { Property } from "../types/Property";

// 4. Below the imports, **before the component**, create an array named `properties`, typed as `Property[]`, containing:

//    | id | title | location | price |
//    |---|---|---|---|
//    | 1 | Two Bedroom Flat | Ikeja | 3000000 |
//    | 2 | Three Bedroom Apartment | Lekki | 5000000 |
//    | 3 | Studio Apartment | Ikeja | 1500000 |

// 5. Write the prices as numbers without quotation marks.
// 6. Create an arrow function component named `PropertyPage`.

// The data is already available in this file, so this task does not require `fetch()` or `useEffect`. 

// 4. Create the filter state
// Inside `PropertyPage`, use `useState("")` to create:
// - A state variable named `selectedLocation`.
// - Its setter named `setSelectedLocation`.
// The empty string represents All locations.

// 5. Calculate the matching properties
// Below the state declaration, create a variable named `filteredProperties`.

// Use a ternary expression:
// 1. Check whether `selectedLocation === ""`.
// 2. If true, use the complete `properties` array.
// 3. Otherwise, use `properties.filter()`.
// 4. Name the callback parameter `property` inside the filter.
// 5. Keep properties where `property.location === selectedLocation`.

// 6. Create the page content**
// Return a `<section>` with `className="p-6"`.
// Inside it, add:
// 1. An `<h1>` displaying **Find Your Next Home**.
// 2. A label displaying **Filter by location**, with `htmlFor="locationFilter"`.
// 3. A `<select>` with:
//    - `id="locationFilter"`.
//    - `value={selectedLocation}`.
//    - This inline arrow function:

//    onChange={(event) =>
//      setSelectedLocation(event.currentTarget.value)
//    }

// 4. Add these options inside the select:
//    | Displayed text | Value |
//    |---------------|---|
//    | All locations | `""` |
//    | Ikeja | `"Ikeja"` |
//    | Lekki | `"Lekki"` |


// 7. Display the property cards

// Below the dropdown:

// 1. Add a paragraph displaying **Properties found:** followed by `{filteredProperties.length}`.
// 2. Add a `<div>` with:

//    className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"

// 3. Inside the div, use `filteredProperties.map()` with `property` as the callback parameter.
// 4. Return a `<PropertyCard />` for each object, passing:
//    - `key={property.id}`.
//    - `property={property}`.
// 5. Export `PropertyPage` as the default export.

import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import type { Property } from "../types/Property";

// array
const properties: Property[] = [
    {
        id: 1,
        title: "Two Bedroom Flat",
        location: "Ikeja",
        price: 3000000,

    },
    {
        id: 2,
        title: "Three Bedroom Apartment",
        location: "Lekki",
        price: 5000000,

    },
    {
        id: 3,
        title: "Studio Apartment",
        location: "Ikeja",
        price: 1500000,

    },
];


const PropertyPage = () => {
    // usestate
    const [selectedLocation, setSelectedLocation] = useState("");

    // Calculate matching properties
    // filtered properties variable
    const filteredProperties = selectedLocation === "" ? properties : properties.filter(p => p.location === selectedLocation
    );

  return (
    <section className="p-6 flex flex-col gap-4 max-w-3xl">
        <h1>Find Your Next Home</h1>
        <label htmlFor="locationFilter">Filter by location</label>
        <select 
        name="locationFilter" 
        id="locationFilter" 
        value={selectedLocation}
        onChange={(event) =>
        setSelectedLocation(event.currentTarget.value)}
        className="border border-green-500 outline-none w-1/2"
        >
    <option value="">All locations</option>
    <option value="Ikeja">Ikeja</option>
    <option value="Lekki">Lekki</option>
        </select>


           {/* // paragraph    */}
           <p>Properties found: {filteredProperties.length}</p>

           {/* div */}
           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map(p => (
                <PropertyCard key={p.id} property={p}  />
            ))}

           </div>
    </section>
   
  )
}

export default PropertyPage

