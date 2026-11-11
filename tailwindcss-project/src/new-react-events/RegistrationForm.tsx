// Practice Task — Handle Form Submission with `onSubmit`

// In your existing React and TypeScript project, create a registration form in a separate component. When the user submits the form with a name, display an alert and keep them on the same page.

// 1. Create `RegistrationForm.tsx` inside `src/components`.
// 2. Define a function component named `RegistrationForm` that returns a `<form>`.
// 3. Inside the form, add a **Name** label and a required text input. Give the input `id="studentName"` and `name="studentName"`. Connect the label to the input using `htmlFor="studentName"`.
// 4. Add a **Register** button with `type="submit"`.
// 5. Add an `onSubmit` prop to the `<form>`. Pass it an inline arrow function that receives `event`.
// 6. Inside the handler, call `event.preventDefault()` to stop the browser’s default form submission. Then display the alert **Form submitted!**
// 7. Export `RegistrationForm` as the default export. Import it into `App.tsx` and render `<RegistrationForm />` inside `<main>`.

// **Test your form** — Click **Register** with the name field empty. Then enter a name and submit again. Check when the alert appears and whether the page reloads.

const RegistrationForm = () => {
  return (
   <form 
   onSubmit={event => {
    event.preventDefault();
    alert("Form submitted");
   }}
   >
    <label htmlFor="studentName">Name</label>
    <input 
    type="text"
    id="studentName"
    name="studentName"
    />

    <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded-lg">Register</button>

   </form>
  )
}

export default RegistrationForm