// Part 6: Practise a Simple Interface

// Inside `src`, create: travelPractice.ts
// Create an interface named `TravelPlan` containing:

// - `traveller`: string
// - `numberOfDays`: number
// - `hasPassport`: boolean

// Create an object named `myTravelPlan` that follows the interface.
// Use your own values and display the object in the browser console.
// Add the following at the bottom of the file:
// export {};

// interface
interface TravelPlan {
    traveller: string;
    numberOfDays: number;
    hasPassport: boolean;
}

// object
const myTravelPlan: TravelPlan = {
    traveller: "Dami",
    numberOfDays: 14,
    hasPassport: false
}

console.log(myTravelPlan);

export {};