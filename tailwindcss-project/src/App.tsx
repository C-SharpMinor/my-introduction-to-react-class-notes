import LearningReminder from "./reusable-components-props/reuseable components/LearningReminder";

import BookCard from "./reusable-components-props/props/BookCard";
import MovieCard from "./MovieCard";
import ClickTester from "./new-react-events/ClickTester";
import HoverCard from "./new-react-events/HoverCard";
import KeyDownExample from "./new-react-events/KeyDownExample";
import NameInput from "./new-react-events/NameInput";
import CourseSelect from "./new-react-events/CourseSelect";
import RegistrationForm from "./new-react-events/RegistrationForm";
import WelcomeMessage from "./react-state/WelcomeMessage";
import ChooseReactButton from "./typing-react-events/ChooseReactButton";
import StudentNamePreview from "./typing-react-events/StudentNamePreview";
import StudentProfileForm from "./typing-react-events/StudentProfileForm";
import LogInmessage from "./conditional-rendering/LogInMessage";
import WelcomeStatus from "./conditional-rendering/WelcomeStatus";
import DashboardAccessProps from "./conditional-rendering/DashboardAccessProps";
import RegistrationStatus from "./react-hooks/RegistrationStatus";


function App() {


  return (
    <>
      <section className="bg-indigo-300 flex flex-col gap-4 w-full p-4 rounded-xl min-h-screen justify-center items-center">

      <h1 className="text-white text-3xl">This is our first tailwind css project</h1>
      
      <p className="text-base text-amber-700 bg-blue-100 p-3 shadow-blue-500 shadow-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam nisi itaque temporibus reiciendis veritatis, voluptas beatae expedita ipsa aspernatur.</p>

      </section>

      <section>
        <LearningReminder />
        <LearningReminder />
        <LearningReminder />
      </section>

      <section>
        <BookCard 
        title="Things Fall Apart" 
        author="Chinua Achebe" 
        // price={20000}
        isAvailable={false}
        />

        <BookCard 
        title="Get Rich or Die Trying" 
        author="Highest B" 
        // price={30000}
        isAvailable={true}
        />

        <BookCard 
        title="A New Earth" 
        author="Kiki Rex"
         price={25000}
        isAvailable={true}
        />


        <BookCard 
        title="AI Takes Over" 
        author="Emmanuel" 
        price={50000}
        isAvailable={true}
        />


        <BookCard 
        title="The New Me" 
        author="Father Figure" 
        price={-5000}
        isAvailable={true}
        />

        <BookCard 
        title="The Lost Boy" 
        author="Imran" 
        price={40000}
        isAvailable={true}
        />

        <BookCard 
        title="Reverend and the Nun" 
        author="Oreoluwa" 
        price={35000}
        isAvailable={true}
        />


        <MovieCard 
        title="The Lion King"
        genre="Animation"
        rating={9}
        hasWatched={true}
        />

        <MovieCard 
        title="Black Panther"
        genre="Action"
        rating={8}
        hasWatched={true}
        />

        <MovieCard 
        title="Hidden Figures"
        genre="Drama"
        hasWatched={false}
        />
        
    <ClickTester />
    <HoverCard />
    <KeyDownExample />
    <NameInput />
    <CourseSelect />
    <RegistrationForm />

    <h1>My First State Example</h1>
    <WelcomeMessage />

    <ChooseReactButton />
    <StudentNamePreview />

    <StudentProfileForm />

    <LogInmessage isLoggedIn={false} />

    <WelcomeStatus isLoggedIn={false} />

    <DashboardAccessProps isLoggedIn={false} />

    <RegistrationStatus />

      </section>
    </>
  )
}

export default App
