// 2. Create the property card
// Inside `src/components/PropertyCard.tsx`:
// 1. Import the `Property` interface using `import type`.
// 2. Define an interface named `PropertyCardProps` containing `property`, typed as `Property`.
// 3. Create a component named `PropertyCard` that receives and destructures the `property` prop.
// 4. Return an `<article>` displaying:
//    - The property title in an `<h2>`.
//    - The location in a paragraph.
//    - **Price: ₦** followed by `{property.price.toLocaleString("en-NG")}`.
// 5. Give the article `className="rounded-lg bg-gray-100 p-5"`.
// 6. Export `PropertyCard` as the default export.

import type { Property } from "../types/Property";

interface PropertyCardProps {
    property: Property;
}

// import React from 'react'

const PropertyCard = ({property}: PropertyCardProps) => {
  return (
    <article className="rounded-lg bg-gray-100 p-5">
        <h2>{property.title}</h2>
        <p>{property.location}</p>
        <p>{property.price.toLocaleString("en-NG")}</p>
    </article>
  )
}

export default PropertyCard