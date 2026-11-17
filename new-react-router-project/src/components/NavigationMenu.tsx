// Guided task 3 — Create reusable navigation
// 1. Inside `src`, create a folder named `components` if it does not already exist.
// 2. Create `NavigationMenu.tsx` inside that folder.
// 3. Import `Link`.
// 4. Create a component named `NavigationMenu`.
// Return a nav that contains an unordered list.
// 5. Add links to Home, About, and Contact using li.
// 6. Export the component.

import { Link } from "react-router";
// import React from 'react'

const NavigationMenu = () => {
  return (
    <nav className="flex flex-col justify-between items-stretch text-center border border-gray-200 px-10 py-3 shadow-lg">
        <ul className="flex justify-evenly items-stretch">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/courses">Courses</Link>
            </li>
            <li>
                <Link to="/registration">Registration</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavigationMenu