import { useState } from "react";
import CourseCard from "../components/CourseCard";
import type { Course } from "../types/Course";

const courses: Course[] = [
    {
        id: 1,
        title: "HTML and CSS",
        category: "Frontend",
        duration: "4 weeks",

    },
    {
        id: 2,
        title: "React",
        category: "Frontend",
        duration: "6 weeks",

    },
    {
        id: 3,
        title: "Node.js",
        category: "Backend",
        duration: "5 weeks",

    },
    {
        id: 4,
        title: "Express",
        category: "Backend",
        duration: "3 weeks",

    }
]


const CoursePage = () => {

    // useState
    const [selectedCategory, setSelectedCategory] = useState("");

    // calculate matching courses
    const filteredCourses = 
    selectedCategory === "" ? courses : courses.filter(c => c.category === selectedCategory);

  return (
    <section>
        <h1>Explore Our Courses</h1>
        <label htmlFor="categoryFilter">Filter by category</label>

        <select 
        id="categoryFilter" 
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.currentTarget.value)}
        >
         <option value="">All categories</option>
         <option value="Frontend">Frontend</option>
         <option value="Backend">Backend</option>
        </select>

        <p>Courses found: {filteredCourses.length}</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map(c => (
            <CourseCard 
            key={c.id}
            course={c}
            />
        ))}
        </div>
    </section>
  )
}

export default CoursePage


// Inside `src/pages/CoursePage.tsx`:

// 1. Import `useState` from `"react"`.
// 2. Import `CourseCard` from `"../components/CourseCard"`.
// 3. Import the `Course` interface using `import type`.
// 4. Below the imports, before the component, create an array named `courses`, typed as `Course[]`, containing:

//    | id | title | category | duration |
//    |---|---|---|---|
//    | 1 | HTML and CSS | Frontend | 4 weeks |
//    | 2 | React | Frontend | 6 weeks |
//    | 3 | Node.js | Backend | 5 weeks |
//    | 4 | Express | Backend | 3 weeks |

// 5. Create an arrow function component named `CoursePage`.

// 4. Create the filter state

// Inside `CoursePage`, use `useState("")` to create:

// - A state variable named `selectedCategory`.
// - Its setter named `setSelectedCategory`.

// The empty string represents All categories.

// 5. Calculate the matching courses

// Below the state declaration, create a variable named `filteredCourses`.

// Use a ternary expression:

// 1. Check whether `selectedCategory === ""`.
// 2. If true, use the complete `courses` array.
// 3. Otherwise, use `courses.filter()`.
// 4. Name the callback parameter `course`.
// 5. Keep courses where `course.category === selectedCategory`.

// 6. Create the page content

// Return a `<section>` with `className="p-6"`.

// Inside it, add:

// 1. An `<h1>` displaying **Explore Our Courses**.
// 2. A label displaying **Filter by category**, with `htmlFor="categoryFilter"`.
// 3. A `<select>` with:
//    - `id="categoryFilter"`.
//    - `value={selectedCategory}`.
//    - This inline arrow function:

//    ```tsx
//    onChange={(event) =>
//      setSelectedCategory(event.currentTarget.value)
//    }
//    ```

// 4. Add these options inside the select:

//    | Displayed text | Value |
//    |---|---|
//    | All categories | `""` |
//    | Frontend | `"Frontend"` |
//    | Backend | `"Backend"` |

// 7. Display the course cards

// Below the dropdown:

// 1. Add a paragraph displaying **Courses found:** followed by `{filteredCourses.length}`.
// 2. Add a `<div>` with:

//    ```tsx
//    className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
//    ```

// 3. Inside the div, use `filteredCourses.map()` with `course` as the callback parameter.
// 4. Return a `<CourseCard />` for each object, passing:
//    - `key={course.id}`.
//    - `course={course}`.
// 5. Export `CoursePage` as the default export.

// 8. Display and test the page

// 1. In `App.tsx`, import `CoursePage` from `"./pages/CoursePage"`.
// 2. Render `<CoursePage />` inside `<main>`.
// 3. Start the development server and test the dropdown.

// Expected outcome:

// | Selected category | Courses displayed |
// |---|---:|
// | All categories | 4 |
// | Frontend | 2 |
// | Backend | 2 |

// Extra: Add a fifth course with a unique `id` and category `"Frontend"`. Confirm that **All categories** displays five courses and **Frontend** displays three.
