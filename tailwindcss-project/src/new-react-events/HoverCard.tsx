// Practice Task — Create a Hover Card

// In your existing React and TypeScript project, create a card that logs a message when the mouse enters it and another message when the mouse leaves it.

// 1. Inside `src/components`, create a file named `HoverCard.tsx`.
// 2. Create a function component named `HoverCard`.
// 3. Inside the component, define two named functions:
//    - `handleMouseEnter` should log **The mouse entered the card.**
//    - `handleMouseLeave` should log **The mouse left the card.**
// 4. Make the component return a `<section>` that displays **Move your mouse over this card.** Style it with the Tailwind classes `rounded-lg bg-purple-100 p-6`.
// 5. Connect `handleMouseEnter` to the section’s `onMouseEnter` prop and `handleMouseLeave` to its `onMouseLeave` prop.
// 6. Export `HoverCard` as the default export.
// 7. In `App.tsx`, import `HoverCard` and render `<HoverCard />` inside a `<main>` element.

const HoverCard = () => {

    // first handleMouseEnter function 
    const handleMouseEnter = () => {
        console.log("The mouse entered the card."); 
    }

    // second handleMouseLeave function
const handleMouseLeave = () => {
    console.log("The mouse left the card.");
    
}

  return (
    <section 
    className="rounded-lg bg-purple-100 p-6"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
        <p>Move your mouse over this card.</p>
    </section>
  )
}

export default HoverCard