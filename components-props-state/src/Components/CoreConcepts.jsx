import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

function CoreConcepts() {
  return (
    <Section title="Core Components" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept) => {
          //passing concept object as a prop to get keys later as required
          //instead we can use spred operator ...concept then use keys names directly on component props
          return (
            <CoreConcept
              title={concept.title}
              image={concept.image}
              desc={concept.description}
            />
          );
        })}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
