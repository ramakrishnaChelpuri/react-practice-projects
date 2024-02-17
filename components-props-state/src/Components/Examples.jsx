import {React} from 'react'
import { EXAMPLES } from "../data"
import TabButton from "./Components/TabButton.jsx"


function Examples(){
    
  const [tabContent,setTabContent]=useState()
  function handleSelect(name){
    setTabContent(name)
  }

    return (
        <section id="examples">
          <menu>
              <TabButton isSelected={tabContent==='components'} onSelect={()=>handleSelect('components')}>Component</TabButton>
              <TabButton isSelected={tabContent==='jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
              <TabButton isSelected={tabContent==='props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
              <TabButton isSelected={tabContent==='state'} onSelect={()=>handleSelect('state')}>State</TabButton>
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
    )
}

export default Examples;