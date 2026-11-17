// Page 2 — `RegistrationSuccess.tsx`

// 1. Inside `src/pages`, create `RegistrationSuccess.tsx`.
// 2. Import `Link` from `"react-router"`.
// 3. Create a function component named `RegistrationSuccess`.
// 4. Return a `<section>` containing:
//    - An `<h1>` displaying - Registration Successful!
//    - A paragraph displaying - You have registered for the coding workshop.
//    - A `Link` displaying - Back to Registration, pointing to `/registration`.
// 5. Export `RegistrationSuccess` as the default export.

import { Link } from "react-router";

// import React from 'react'

const RegistrationSuccess = () => {
  return (
    <section>
        <h1>Registration Successful!</h1>
        <p>You have registered for the coding workshop.</p>
        <Link to="/registration">Back to Registration</Link>
    </section>
  )
}

export default RegistrationSuccess