import { Link, Outlet } from "react-router";



// import React from 'react'

const DashboardLayout = () => {
  return (
    <section className="flex">
        <div className="flex flex-col gap-8">
            <h1>Student Dashboard</h1>
                <nav>
            <ul className="text-center"> 
                <li className="bg-amber-300 mb-6">
                    <Link to="/dashboard">Overview</Link>
                </li>
                <li className="bg-amber-300 mb-6">
                    <Link to="/dashboard/profile">Profile</Link>
                </li>
                <li className="bg-amber-300 mb-6">
                    <Link to="/dashboard/settings">Settings</Link>
                </li>
            </ul>
        </nav>

        </div>
     <hr /> 

        <div className=" border-l border-opacity-30 min-h-screen px-10 py-4">
            <Outlet />
        </div>
    </section>
  )
}

export default DashboardLayout



// Guided Task 7 — Create a Dashboard Layout
// Create a shared layout for the dashboard’s Overview, Profile, and Settings pages.
// 1. Inside `src`, create a folder named `layouts`.
// 2. Inside `src/layouts`, create `DashboardLayout.tsx`.
// 3. Import `Link` and `Outlet` from `"react-router"`.
// 4. Create an arrow function component named `DashboardLayout`.
// 5. Make the component return a `<section>`.
// 6. Inside the section, add an `<h1>` displaying **Student Dashboard**.
// 7. Below the heading, add a `<nav>`.
// 8. Inside the navigation, add a `<ul>` containing three `<li>` elements. Each list item should contain a `Link`:

//    | Link text | `to` value |
//    |---|---|
//    | Overview | `"/dashboard"` |
//    | Profile | `"/dashboard/profile"` |
//    | Settings | `"/dashboard/settings"` |

// 9. Below the navigation, add an `<hr />`.
// 10. Below the horizontal line, render `<Outlet />`. This is where the matching nested page will appear.
// 11. Export `DashboardLayout` as the default export.

// Expected outcome:** You have a reusable dashboard layout containing a heading, navigation links, and a space for nested pages. Once you configure the nested routes, the heading and navigation stay visible while the content inside `<Outlet />` changes.



// IN APP.tsx
// import `DashboardLayout` into `App.tsx` and give it a route. Its nested routes determine what appears inside `<Outlet />`.

// Add this import:

// import DashboardLayout from "./layouts/DashboardLayout";


// Then add the following inside your existing `<Routes>`:
// <Route path="/dashboard" element={<DashboardLayout />}>
//   <Route index element={<p>Welcome to your dashboard.</p>} />
//   <Route path="profile" element={<p>Your student profile.</p>} />
//   <Route path="settings" element={<p>Your account settings.</p>} />
// </Route>


// | URL                   | Content displayed inside `<Outlet />` |
// |-----------------------|---------------------------------------|
// | `/dashboard`          | Welcome to your dashboard.            |
// | `/dashboard/profile`  | Your student profile.                 |
// | `/dashboard/settings` | Your account settings.                |

// The Student Dashboard heading and dashboard navigation remain visible on all three pages.

// Notice that:

// - `index` makes Overview the default content at `/dashboard`.
// - The nested paths `"profile"` and `"settings"` extend the parent path `"/dashboard"`.

// You can later replace the paragraphs with separate page components:


// <Route path="/dashboard" element={<DashboardLayout />}>
//   <Route index element={<DashboardOverview />} />
//   <Route path="profile" element={<DashboardProfile />} />
//   <Route path="settings" element={<DashboardSettings />} />
// </Route>



// ===Explanation of the route group===
// <Route path="/dashboard" element={<DashboardLayout />}>
// Defines the parent route.


// <Route index element={<DashboardHome />} />
// Displays the overview at `/dashboard`.


// <Route path="profile" element={<Profile />} />
// Adds `profile` to the parent path, producing `/dashboard/profile`.

// Expected outcome: Profile and Settings appear where `<Outlet />` sits. The dashboard heading and links stay visible.
