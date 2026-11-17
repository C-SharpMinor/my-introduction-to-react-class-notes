// Guided task 4 — Create a dynamic route**
// 1. Create `CourseDetails.tsx` inside `src/pages`.
// 2. Add the component that returns a section containing a heading: Course Details and a paragraph: This page will display the selected course.
// 3. Import `CourseDetails` into `App.tsx`.
// 4. Add this route inside `Routes`:
// <Route
//   path="/courses/:courseId"
//   element={<CourseDetails />}
// />

// 5. Visit `/courses/html`.
// 6. Visit `/courses/react`.

// Expected outcome: Both URLs display `CourseDetails`.
// At this point, both show the same text because we have not read the changing value yet.

// --------
// Part 2 — Display the selected course
// 1. Open `CourseDetails.tsx`.
// 2. Import `useParams`.
// 3. Call it inside the component.
// 4. Destructure `courseId`.
// 5. Display it in a paragraph.


// Part 3 — Display Course Information Using a Dynamic Route

// Update your existing `CourseDetails.tsx` so it finds and displays information about the course specified in the URL.

// 1. Open `src/pages/CourseDetails.tsx`.
// 2. Import `Link` and `useParams` from `"react-router"`.
// 3. Create an arrow function component named `CourseDetails`.
// 4. Inside the component, call `useParams()` and destructure `courseId` from its returned object.
// 5. Create an array named `courses` containing these objects:
// ---------------------------------------------------------
//    | id        | title                 | duration    |
//    |-----------|-----------------------|-------------|
//    | `"html"`  | `"HTML Fundamentals"` | `"2 weeks"` |
//    | `"css"`   | `"CSS Styling"`       | `"3 weeks"` |
//    | `"react"` | `"React Development"` | `"4 weeks"` |

// 6. Create a variable named `selectedCourse`. Use `courses.find()` to find the course whose `id` matches `courseId`.
// 7. Write an `if` statement that checks whether `selectedCourse` was not found. If it was not found, return a `<section>` containing:
//    - An `<h1>` displaying **Course not found**.
//    - A `Link` displaying **Back to courses**, with `to` set to `"/courses"`.
// 8. After the `if` statement, return a `<section>` containing:
//    - An `<h1>` displaying `selectedCourse.title`.
//    - A paragraph displaying **Duration:** followed by `selectedCourse.duration`.
//    - A `Link` displaying **Back to courses**, with `to` set to `"/courses"`.
// 9. Export `CourseDetails` as the default export.
// 10. In `App.tsx`, confirm that your existing dynamic route uses the path `"/courses/:courseId"` and renders `<CourseDetails />`.
// 11. Save your files and test these URLs:

//    | URL             | Expected display                      |
//    |-----------------|---------------------------------------|
//    | `/courses/html` | HTML Fundamentals — Duration: 2 weeks |
//    | `/courses/css`  | CSS Styling — Duration: 3 weeks |
//    | `/courses/react` | React Development — Duration: 4 weeks |
//    | `/courses/python` | Course not found |

// 12. Click *Back to courses* and confirm that it takes you to `/courses`.

// Expected outcome: One `CourseDetails` component displays the matching course’s information based on the URL. If no course matches, it displays **Course not found.


// import React from 'react'
// import { title } from "process";
import { Link, useParams } from "react-router"

const CourseDetails = () => {

    // destructure courseid
   const { courseId } = useParams();


    // array of courses
   const courses = [
    { id: "html", title: "HTML Fundamentals", duration: "2 weeks" },
    { id: "css", title: "CSS Styling", duration: "3 weeks" },
    { id: "react", title: "React Development", duration: "4 weeks" },
    { id: "typescript", title: "TypeScript", duration: "2 weeks" }
   ];

   // Use `courses.find()` to find the course whose `id` matches `courseId`
   const selectedCourse = courses.find(c => c.id === courseId );
  
   // conditional statement for what should display if course is not found
   if (!selectedCourse) {
    return (
       <section>
        <h1>Course not found</h1>
        <Link to="/courses">Back to Course</Link>
       </section>
    )
   }

  return (
    <section>
        <h1>{selectedCourse.title}</h1>
        <p>Duration: {selectedCourse.duration}</p>   
        <Link to="/courses">Back to Courses</Link>   
    </section>
  )
}

export default CourseDetails


// 8. After the `if` statement, return a `<section>` containing:
//    - An `<h1>` displaying `selectedCourse.title`.
//    - A paragraph displaying **Duration:** followed by `selectedCourse.duration`.
//    - A `Link` displaying **Back to courses**, with `to` set to `"/courses"`.
// 9. Export `CourseDetails` as the default export.
// 10. In `App.tsx`, confirm that your existing dynamic route uses the path `"/courses/:courseId"` and renders `<CourseDetails />`.
// 11. Save your files and test these URLs:

//    | URL             | Expected display                      |
//    |-----------------|---------------------------------------|
//    | `/courses/html` | HTML Fundamentals — Duration: 2 weeks |
//    | `/courses/css`  | CSS Styling — Duration: 3 weeks |
//    | `/courses/react` | React Development — Duration: 4 weeks |
//    | `/courses/python` | Course not found |

// 12. Click Back to courses and confirm that it takes you to `/courses`.

// Expected outcome: One `CourseDetails` component displays the matching course’s information based on the URL. If no course matches, it displays **Course not found.
