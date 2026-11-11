// REUSABLE COMPONENT
// A reusable component is one you define/create once and use multiple times. Here, BookCard will give three books the same layout.



// Practice task 2 — Reusable learning reminder with Tailwind CSS
// Use your existing React and TypeScript project with Tailwind CSS configured.
// 1. Inside the src folder, create a file named LearningReminder.tsx.
// 2. Create a function component named LearningReminder in that file.
// 3. Make it display:
//    - An <h2> containing Keep Practising.
//    - A paragraph containing Practise React every day to improve your skills.
// 4. Wrap the heading and paragraph in a <section>.
// 5. Use Tailwind CSS classes to style:
//    - The section with a light background colour, padding, rounded corners, and a bottom margin.
//    - The heading with a larger font size, bold text, and a bottom margin.
//    - The paragraph with a dark grey text colour.
// 6. Export LearningReminder as the default export.
// 7. Import it into App.tsx and display <LearningReminder /> twice inside App.
// 8. Add padding to the <main> element using Tailwind CSS.
// 9. Change the paragraph in LearningReminder.tsx and check that both instances update.
// Extra: Change the section’s background colour on hover using a Tailwind utility.

// import React from 'react'

const LearningReminder = () => {
  return (
    <section className="bg-emerald-300 p-5 rounded-lg mb-3">
        <h2 className="text-3xl font-extrabold mb-2">Keep Practising</h2>
        <p className="bg-fuchsia-900">Practise React every day to improve your skills.</p>
    </section>
  )
}

export default LearningReminder
