//4 NOVEMBER 2026
// INTRODUCTION TO REACT: DOM RECAP

// You have already used JavaScript to select elements, change their content, apply classes, and handle events.

// Task: Display a Welcome Message When a Button Is Clicked**

// Assume your HTML contains a button with the ID `"welcomeButton"` and a paragraph with the ID `"message"`.

// Write JavaScript to:

// 1. Select the button using `getElementById()` and store it in a constant named `button`.
const welcomeButton = document.getElementById("welcomeButton");
const message = document.getElementById("message");

welcomeButton.addEventListener("click", () => {
    message.textContent = "Welcome to React!";
}

);
// 2. Select the paragraph and store it in a constant named `message`.
// 3. Add a `"click"` event listener to the button using an anonymous arrow function.
// 4. Inside the event handler, use `textContent` to change the paragraph’s text to **“Welcome to React!”**
// 5. Click the button and check that the message appears on the webpage.
// Brief recap: Connecting the DOM to React



// “With the DOM, we selected elements and instructed JavaScript to update them. In React, we build components that describe what should appear on the page. When their data changes, React updates the interface.”
