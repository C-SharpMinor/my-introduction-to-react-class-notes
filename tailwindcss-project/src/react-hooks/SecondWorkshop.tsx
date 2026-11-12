// Independent practice — Reuse the hook
// 1. Create src/react-hooks/SecondWorkshop.tsx.
// 2. Import useRegistrationStatus and create a function component named SecondWorkshop.
// 3. Call the hook to get status, openRegistration and closeRegistration.
// 4. Return a <section> with a Weekend Workshop heading, a paragraph displaying status, and the two registration buttons.
// 5. Export the component at the bottom.
// 6. In App.tsx, render <SecondWorkshop /> alongside the first workshop.
// 7. Open registration for one workshop and check the other.
// Expected result: The two workshops update independently. They reuse the hook’s logic, and each call owns its own registration state.

import useRegistrationStatus from "./useRegistrationStatus";


const SecondWorkshop = () => {
    const {
        status,
        openRegistration,
        closeRegistration,
    } = useRegistrationStatus();

  return (
    <section>
        <h2>Weekend Workshop</h2>

        <p>{status}</p>

            <button 
            type="button"
            onClick={openRegistration}
            className="bg-yellow-600 text-white px-5 py-2 mb-2 block"
            >Open Registration
            </button>

            <button 
            type="button"
            onClick={closeRegistration}
            className="bg-red-600 text-white px-5 py-2 mb-2 block"
            >Close Registration</button>
    </section>
  )
}

export default SecondWorkshop