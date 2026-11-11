// Task 1 — Change a Welcome Message with JavaScript
// Create a page where clicking a button changes the text in a paragraph.
// 1. Create index.html and script.js. Link the JavaScript file to the HTML page.
// 2. Inside <main>, add an <h1> that says Welcome Message.
// 3. Add a paragraph with id="message" and the text Click the button to see a message.
// 4. Add a button with id="welcomeButton" and the label Show Welcome.
// 5. In script.js, use document.getElementById() to select the button and the paragraph.
// 6. Add a click event listener to the button. Inside the event handler, use textContent to change the paragraph to Welcome to React!

const welcomeButton = document.getElementById("welcomeButton");
const message = document.getElementById("message");

welcomeButton.addEventListener("click", () => {
    message.textContent = "Welcome to React";
});