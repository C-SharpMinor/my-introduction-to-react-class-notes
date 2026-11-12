// **Practice Task — Display Property Cards Using `.map()`**

// import { title } from "process";

// In your existing React and TypeScript project:

// 1. Inside `src/mapping-practice`, create a file named `PropertyList.tsx`.
// 2. Define an interface named `Property` containing:
//    - `id`, typed as `number`.
//    - `title`, typed as `string`.
//    - `location`, typed as `string`.
//    - `price`, typed as `number`.
// 3. Create an arrow function component named `PropertyList`.
// 4. Inside the component, create an array named `properties`, typed as `Property[]`, containing these objects:

interface Property {
    id: number;
    title: string;
    location: string;
    price: number;
}

// import React from 'react'

const PropertyList = () => {

    const properties: Property[] = [
        { id: 1, title: "Three Bedroom Flat", location: "Banana Island", price: 1000000000 },
        { id: 2, title: "Two Bedroom Flat", location: "Ikotun Egbe", price: 300000000 },
        { id: 3, title: "Five Bedroom Flat", location: "Ikorodu", price: 30000000 },
        { id: 4, title: "Three Bedroom Duplex", location: "Onipanu", price: 400000000 },
        { id: 4, title: "Three Bedroom Duplex", location: "Onipanu", price: 400000000 },
        { id: 4, title: "Three Bedroom Duplex", location: "Onipanu", price: 400000000 },
        { id: 4, title: "Three Bedroom Duplex", location: "Onipanu", price: 400000000 },
        { id: 4, title: "Three Bedroom Duplex", location: "Onipanu", price: 400000000 },
        { id: 4, title: "Three Bedroom Duplex", location: "Onipanu", price: 400000000 },
        { id: 4, title: "Three Bedroom Duplex", location: "Onipanu", price: 400000000 }
    ]

  return (
    <section className="w-full max-w-3xl flex flex-col justify-center mt-5 items-center">
        <h2>Available Properties</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {properties.map(property => (
                <article key={property.id} className="rounded-lg bg-blue-400 p-5 shadow-2xl">
                    <h3 className="text-xl font-bold">{property.title}</h3>
                    <p>{property.location}</p>
                    <p>{property.price.toLocaleString("en-NG")}</p>

                    <button type="button">View Property</button>
                </article>
            ))}
        </div>
    </section>
  )
}

export default PropertyList



//    | id | title | location | price |
//    |---|---|---|---|
//    | 1 | Three-Bedroom Apartment | Lekki, Lagos | 5000000 |
//    | 2 | Two-Bedroom Flat | Ikeja, Lagos | 3000000 |

// 5. Make the component return a `<section>` containing:
//    - An `<h2>` displaying **Available Properties**.
//    - A `<div>` to hold the property cards.
// 6. Inside the `<div>`, use `properties.map()` to create an `<article>` for each property. Name the callback parameter `property`.
// 7. Give each `<article>` a `key` set to `{property.id}`.
// 8. Inside each `<article>`, display:
//    - The property title in an `<h3>` using `{property.title}`.
//    - The location in a paragraph using `{property.location}`.
//    - Another paragraph displaying **Price: ₦** followed by `{property.price.toLocaleString("en-NG")}`. This formats the number with thousands separators.
//    - A button with `type="button"` displaying **View Property**.
// 9. Apply these Tailwind CSS classes:
//    - Cards’ container: `grid grid-cols-1 gap-4 md:grid-cols-2`.
//    - Each card: `rounded-lg bg-gray-100 p-5`.
//    - Each property title: `text-xl font-bold`.
// 10. Export `PropertyList` as the default export.
// 11. In `App.tsx`, import `PropertyList` from `"./mapping-practice/PropertyList"` and render `<PropertyList />` inside `<main>`.

// **Expected outcome:** Two property cards displaying each property’s title, location, formatted price, and a **View Property** button. The cards appear in one column on small screens and two columns from the `md` breakpoint.

// **Extra:** Add a third property object with a unique `id`. Confirm that another card appears without writing another `<article>`.
