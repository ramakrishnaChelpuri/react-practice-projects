import {useState} from 'react'
import Header from "./Components/Header"
import CoreConcept from "./Components/CoreConcept"
import {CORE_CONCEPTS,EXAMPLES} from "./data.js"
import TabButton from "./Components/TabButton.jsx"
function App() {

  const [tabContent,setTabContent]=useState()
  function handleSelect(name){
    setTabContent(name)
  }

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
      <section id="examples">
        <menu>
          <TabButton onSelect={()=>handleSelect('components')}>Component</TabButton>
          <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
        </menu>
        {!tabContent?(<p>Please select a Topic</p>):(
          <div id='tab-content'>
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;