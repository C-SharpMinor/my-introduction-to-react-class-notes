// Practice Task 5 — Create useRegistrationStatus
// 1. Inside src/react-hooks,
// 2. Inside it, create useRegistrationStatus.ts. Use .ts because this file will contain logic without JSX.
// 3. Import useState.
// 4. Define an interface named RegistrationStatusResult.
// 5. Give the interface a status property typed as string.
// 6. Add openRegistration and closeRegistration properties, each typed as () => void.

import { useState, useEffect } from "react";


//() => void describes a function that takes no arguments and returns no result for the caller to use. The interface describes what our custom hook gives back.
interface RegistrationStatusResult {
    status: string; 
    openRegistration: () => void;
    closeRegistration: () => void;
}

function useRegistrationStatus (): RegistrationStatusResult {
     // set state variable and setter with usestatae having a default value
    const [status, setStatus] = useState("Registration is Closed");


      //  Task 2 - Step 2: Use Effect Beginning
    useEffect(() => {
        const previousTitle = document.title;
        document.title = status;

        // return a cleanup arrow function - sets document.title back to previousTitle
       return () => {
        document.title = previousTitle;
       };
    }, [status]); // Giving the effect a dependency array containing status. End of use effect.

    // initial open registration function
    const openRegistration = () => {
        setStatus("Registration is Open");
    }
    // initial close registration function
    const closeRegistration = () => {
        setStatus("Registration is Closed");
    }

    return {
        status,
        openRegistration,
        closeRegistration
    };

}

export default useRegistrationStatus




// 7. Create a function named useRegistrationStatus. Give it the return type RegistrationStatusResult.
// 8. Inside it, create the registration state and the two named handler functions, using the same code as the original component.
// 9. Return an object containing status, openRegistration and closeRegistration.
// 10. Export useRegistrationStatus as the default export at the bottom.