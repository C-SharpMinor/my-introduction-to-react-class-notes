// ## Part 3: Create `PageHeader` with a Function Declaration
// Inside `src`, create: PageHeader.tsx

// Create a component named `PageHeader` using a function declaration.
// It should return a `<header>` containing:
// - An `<h1>` displaying `My Dream Destination`.
// - A paragraph explaining that the page was created with React and TypeScript.

// Use the function-declaration structure studied in class:

// ```tsx
// function ComponentName() {
//     return (
//         // JSX goes here
//     );
// }

// export default ComponentName;


// Export `PageHeader` as the default export.

function PageHeader () {
    return (
        <header>
            <h1>My Dream Destination</h1>
            <p>The page was created with React and TypeScript</p>
        </header>
    );
}


export default PageHeader