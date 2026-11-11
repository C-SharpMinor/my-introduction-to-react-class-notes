// Create a file named `Welcome.jsx` inside the `src` folder. 
// Write a function component named `Welcome` that returns 
// a `<section>` containing an `<h2>` displaying **“Welcome to React”
// and a paragraph displaying **“This component is written in JSX.”
// Export `Welcome` as the default export.

function Welcome() {
    return (
        <section>
            <h2>Welcome to React</h2>
            <p>This component is written in JSX.</p>
        </section>
    )
}


export default Welcome

// Open tsconfig.app.json and add these two settings inside the existing "compilerOptions" object:
// "allowJs": true,
// "checkJs": false

// Keep the other settings and separate neighbouring properties with commas.
// - allowJs includes .js and .jsx files in the project.
// - checkJs: false disables TypeScript checking inside those JavaScript files.
