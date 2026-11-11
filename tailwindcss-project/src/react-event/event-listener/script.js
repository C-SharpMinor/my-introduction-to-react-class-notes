
// 1. Create a button in HTML with:
//    - An `id` of `welcomeButton`.
//    - The text **Show Welcome**.
// 2. In JavaScript, select the button using `getElementById()` and store it in a constant named `button`.
// 3. Use `addEventListener()` to listen for a `"click"` event.
// 4. Pass an **anonymous arrow function** directly to the event listener.
// 5. Inside the function, display an alert containing **Welcome!**
// 6. Click the button to test your code.
const welcomeButton = document.getElementById("welcomeButton");

// anonymous arrow function
// welcomeButton.addEventListener("click", () => {
//     alert("Welcome!")
// });

// named function
function WelcomeMessage () {
    alert("Welcome Back!")
}

welcomeButton.addEventListener("click", WelcomeMessage);