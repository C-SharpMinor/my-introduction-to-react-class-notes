// You can also use onChange with a dropdown:

// Practice Task — Log the Selected Course with `onChange`
// In your existing React and TypeScript project, create a separate component that logs the selected course whenever the user changes their choice.

// 1. Create `CourseSelect.tsx` inside `src/components`.
// 2. Define a function component named `CourseSelect` that returns a `<select>` element.
// 3. Set `defaultValue=""` on the `<select>`. Add **Choose a course** as the first option with an empty value and the `disabled` attribute.
// 4. Add three selectable options. Use **HTML**, **CSS**, and **React** as both the displayed text and the value of each option.
// 5. Add an `onChange` prop to the `<select>`. Pass it an inline arrow function that receives `event`.
// 6. Inside the function, use `event.currentTarget.value` and `console.log()` to log the selected course. For example, choosing React should log `Selected course: React`.
// 7. Export `CourseSelect` as the default export. Import it into `App.tsx` and render `<CourseSelect />` inside `<main>`.
// 8. Open the browser console. Select **HTML**, then **CSS**, then **React**. Check that the console logs each course in that order.


const CourseSelect = () => {
  return  <select
        defaultValue="" 
        onChange={event => {
            console.log(event.currentTarget.value);    
        }}
        >
            <option value="">Choose a Course</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="React">React</option>

  </select>
}

export default CourseSelect