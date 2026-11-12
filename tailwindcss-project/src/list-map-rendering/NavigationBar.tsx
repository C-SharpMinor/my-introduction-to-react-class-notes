// **Practice Task — Create a Navigation Bar Using `.map()`**

// In your existing React and TypeScript project:

// 1. Inside `src/list-map-rendering`, create a file named `NavigationBar.tsx`.
// 2. Create a function component named `NavigationBar`.
// 3. Inside the component, create an array named `navigationLinks` containing `"Home"`, `"About"`, `"Courses"`, and `"Contact"`.
// 4. Make the component return a `<nav>` containing a `<ul>`.
// 5. Inside the `<ul>`, use `navigationLinks.map()` to create a list item for each navigation link. Name the callback parameter `link`.
// 6. Give each `<li>` a `key` set to `{link}`.
// 7. Inside each `<li>`, add an `<a>` element:
//    - Set its `href` to `"#"`.
//    - Display the current link name using `{link}`.

// import React from 'react'

const NavigationBar = () => {

    const navigationLinks = ["Home", "About", "Testimonials", "Gallery", "Courses", "Contact"];

  return (
    <nav className="border border-b-2 border-b-blue-700 mt-3 w-full h-auto flex justify-center items-stretch">
        <ul className="flex gap-6 list-none justify-start items-stretch">
            {navigationLinks.map(link => (
                <li key={link}><a href="#">{link}</a></li>
            ))}
        </ul>

    </nav>
  )
}

export default NavigationBar



// 8. Export `NavigationBar` as the default export.
// 9. In `App.tsx`, import it from `"./mapping-practice/NavigationBar"`.

// 10. Render `<NavigationBar />` inside the `App` component.
// 11. Use Tailwind CSS to style:
//     - The `<nav>` with a background colour and padding.
//     - The `<ul>` with `flex`, `gap-6`, and `list-none`.
//     - The links with a text colour and a different colour on hover.

// **Expected outcome:** A navigation bar displaying **Home, About, Courses, and Contact** horizontally. The links are placeholders for this exercise.

// **Extra:** Add `"Gallery"` to the array. Confirm that it appears without writing another `<li>` or `<a>` element.