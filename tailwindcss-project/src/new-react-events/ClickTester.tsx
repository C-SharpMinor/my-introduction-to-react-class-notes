// Practice Task — Compare a Click and a Double-Click
// Create a ClickTester component that uses onClick and onDoubleClick on the same button.

// Create ClickTester.tsx inside src/components.
// Make the component display a button with the text Test your clicks and type="button".
// Write a named function called handleClick that logs Click detected. Connect it to the button’s onClick prop.
// Write a named function called handleDoubleClick that logs Double-click detected. Connect it to the same button’s onDoubleClick prop.
// Export ClickTester as the default export. Import it into App.tsx and render it inside <main>.
// Open the browser console. Click the button once, clear the console, then double-click the button. Predict which messages will appear before you test it.

// step 1: create component
const ClickTester = () => {

    // create handleclick function
    const handleClick = () => {
        console.log("Click Detected");
        
    }

    // create handledouble click function
    const handleDoubleClick = () => {
        console.log("Double-click detected");
        
    }
  return (
    <div>
        <button 
        type="button"
        onClick={handleClick} //handleclick function passed to the button's onClick prop.
        onDoubleClick={handleDoubleClick}
        >Test your clicks</button>
    </div>
  )
}

export default ClickTester