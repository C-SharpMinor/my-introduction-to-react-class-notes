import type { Course } from "../types/Course";

interface CourseCardProps {
    course: Course;
}


const CourseCard = ({course}: CourseCardProps) => {
  return (
    <article className="rounded-lg bg-blue-100 p-5">
        <h2>{course.title}</h2>
        <p>Category: {course.category}</p>
        <p>Duration: {course.duration}</p>
    </article>
  )
}

export default CourseCard


// 2. Create the course card
// Inside `src/components/CourseCard.tsx`:
// 1. Import the `Course` interface using:
//    import type { Course } from "../types/Course";

// 2. Define an interface named `CourseCardProps` containing `course`, typed as `Course`.
// 3. Create an arrow function component named `CourseCard` that receives and destructures the `course` prop.
// 4. Return an `<article>` displaying:
//    - The course title in an `<h2>`.
//    - Category: followed by `{course.category}` in a paragraph.
//    - Duration: followed by `{course.duration}` in another paragraph.
// 5. Give the article `className="rounded-lg bg-blue-100 p-5"`.
// 6. Export `CourseCard` as the default export.

