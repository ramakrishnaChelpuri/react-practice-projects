import Header from "./Components/Header"
import CoreConcept from "./Components/CoreConcept"
import {CORE_CONCEPTS} from "./data.js"

function App() {
  console.log(CORE_CONCEPTS.map((obj)=>obj.title))
  return (
    <div>
      <Header/>
      <ul id="core-concepts">
        {CORE_CONCEPTS.map((concept)=>{
          return(<CoreConcept 
            title={concept.title}
            image={concept.image}
            desc={concept.description}
          />)
        })}
      </ul>
    </div>
  );
}

export default App;
