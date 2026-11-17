// ======Practice task — Add Courses=====
// 1. Create `Courses.tsx` inside `src/pages`.
// 2. Make it display the heading **Our Courses**.
// 3. Export it.
// 4. Import it into `App.tsx`.
// 5. Add a `/courses` route inside `Routes`.
// 6. Add a Courses link to `NavigationMenu.tsx`.
// 7. Click the link to test it.

// ---
// PART 2: 
// Import Link
// // 4. Make the component return a `<section>`.
// // 5. Inside the section, add:
// //    - An `<h1>` displaying **Our Courses**.
// //    - A paragraph displaying **Select a course to view its details.
// //    - A `<ul>` containing two `<li>` elements.
// // 6. Inside the first `<li>`, add a `Link` displaying HTML, with its `to` prop set to `"/courses/html"`.
// // 7. Inside the second `<li>`, add a `Link` displaying **CSS**, with its `to` prop set to `"/courses/css"`.


// import React from 'react'
import { Link } from "react-router"

const Courses = () => {
  return (
    <section>
        <h2>Our Courses</h2>
        <a href="https://www.techstudioacademy.com/courses/fullstack-development">Check Tech Studio Academy for more details</a>
      
      <p>Select a course to view its details.</p>
      <ul>
        <li>
            <Link to="/courses/html">HTML</Link>
        </li>
        <li>
            <Link to="/courses/css">CSS</Link>
        </li>
        <li>
            <Link to="/courses/react">React</Link>
        </li>
        <li>
            <Link to="/courses/typescript">TypeScript</Link>
        </li>
      </ul>

    </section>
  )
}

export default Courses