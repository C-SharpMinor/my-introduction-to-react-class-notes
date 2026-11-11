// Create a file named `LearningGoal.jsx` inside the `src` folder. 
// Write a function component named `LearningGoal` 
// that returns a `<section>` containing an `<h2>` displaying “My Learning Goal”
//  and a paragraph displaying “I want to build websites using React.”
//  Export `LearningGoal` as the default export. 
// Import and render it inside `App.tsx`, 
// then confirm that its content appears in the browser.


function LearningGoal() {
    return (
        <section>
            <h2>My Learning Goal</h2>
            <p>I want to build websites using React.</p>
        </section>
    );
}


export default LearningGoal