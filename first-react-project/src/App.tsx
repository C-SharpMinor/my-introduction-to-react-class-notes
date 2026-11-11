// import './file-extensions/ts-extensions/Student'
import './file-extensions/ts-extensions/book'
import './file-extensions/ts-extensions/product'
import { productName, productPrice } from "./file-extensions/ts-extensions/product";
import { studentName, studentAge } from './file-extensions/ts-extensions/NewStudent';
import Welcome from './file-extensions/jsx-extensions/Welcome';
import LearningGoal from './file-extensions/jsx-extensions/LearningGoal';
import StudentProfile from './file-extensions/tsx-extensions/StudentProfile';
import BookDetails from './file-extensions/tsx-extensions/BookDetails';
import './interface-and-type/practice'
import './App.css'

function App() {
 

  return (
    <>
      <h1 className='heading'>Welcome to React Class!</h1>
      <h1>This is a fullstack class.</h1>

      <main>
      <h1>{productName}</h1>
      <p>Price: {productPrice}</p>

      <section>
        <h1>{studentName}</h1>
        <p>Age: {studentAge}</p>
      </section>
d
      <Welcome />
      <LearningGoal />

      <StudentProfile />
      <BookDetails />
      </main>




    </>
  )
}

export default App


