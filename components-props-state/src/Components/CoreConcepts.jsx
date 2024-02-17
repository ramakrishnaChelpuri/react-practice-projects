import { CORE_CONCEPTS } from "../data"
import CoreConcept from "./CoreConcept"


function CoreConcepts(){
    return(
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
            {CORE_CONCEPTS.map((concept)=>{
                return(<CoreConcept 
                title={concept.title}
                image={concept.image}
                desc={concept.description}
                />)
            })}
            </ul>
        </section>
    )
}