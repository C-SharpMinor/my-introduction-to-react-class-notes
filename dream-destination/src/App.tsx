
import './App.css'
import PageHeader from './PageHeader';
import TravelReason from './TravelReason';
import TravelTip from './TravelTip';
import { 
  destinationName, 
  country, 
  estimatedCost, 
  requiresVisa } from "./destination";
  import './travelPractice';
  import Paris from './assets/paris.jpeg'

function App() {


  return (
    <>
    <main className='container'>
    <PageHeader />

    <section>
      <img 
      src={Paris}
      alt='eiffel-tower'
     />
      <h2>Destination Details</h2>
      <p>Destination: {destinationName}</p>
      <p>Country: {country}</p>
      <p>Estimated Cost: {estimatedCost}</p>
      <p>RequiresVisa: {requiresVisa ? "Yes" : "No"}</p>
    </section>

    <TravelReason />

    <TravelTip />
    <TravelTip />
    <TravelTip />

    </main>
     
    </>
  )
}

export default App
