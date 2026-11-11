// C. Using &&
// Use && when content should appear only when a condition is true:
// {isLoggedIn && <button type="button">View Dashboard</button>}
// **Practice Task — Show a Dashboard Button Using `&&`**

// 1. Create `DashboardAccess.tsx` inside `src/conditional-rendering`.
// 2. Define an interface named `DashboardAccessProps` containing `isLoggedIn`, typed as `boolean`.
// 3. Create a function component named `DashboardAccess`. Destructure `isLoggedIn` from its props and type the props using `DashboardAccessProps`.
// 4. Make the component return a `<section>` containing an `<h2>` displaying **Student Dashboard**.
// 5. Below the heading, use `&&` to display a button only when `isLoggedIn` is `true`. Give the button `type="button"` and the text **View Dashboard**.
// 6. Export `DashboardAccess` as the default export.
// 7. In `App.tsx`, import `DashboardAccess` from `"./components/DashboardAccess"` and render `<DashboardAccess isLoggedIn={true} />` inside `<main>`.
// 8. Save and confirm that the heading and button appear. Change the prop to `false` and confirm that only the heading appears.

interface DashboardAccessProps {
    isLoggedIn: boolean;
}


const DashboardAccessProps = ({isLoggedIn}: DashboardAccessProps) => {
  return (
    <section>
        <h2>Student Dashboard</h2>
        
        {isLoggedIn 
        && 
        <button type="button" className="bg-emerald-600 text-white px-5 py-2 rounded-sm">
            View Dashboard
        </button>
        }
    </section>
  )
}

export default DashboardAccessProps