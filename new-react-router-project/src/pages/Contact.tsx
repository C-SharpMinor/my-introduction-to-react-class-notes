// ======= SHORT PRACTICE TASK
// Practice task — Add Contact
// 1. Create `Contact.tsx` inside `src/pages`.
// 2. Create a component named `Contact`.
// 3. Display the heading **Contact Us**.
// 4. Display the paragraph **Email: hello@example.com**.
// 5. Export the component.
// 6. Import it into `App.tsx`.
// 7. Add a route with the path `/contact`.
// 8. Set its `element` to `<Contact />`.
// 9. Visit `/contact` in the browser.

// Expected outcome: The Contact page appears at `/contact`.

// import React from 'react'

const Contact = () => {
  return (
    <section>
        <h2>Contact Us</h2>
        <p>Email: hello@example.com</p>
    </section>
  )
}

export default Contact
