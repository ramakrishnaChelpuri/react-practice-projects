import { React, useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";

function Examples() {
  const [tabContent, setTabContent] = useState();
  function handleSelect(name) {
    setTabContent(name);
  }

  return (
    <section id="examples">
      <Tabs //created new component for buttons reusability
        ButtonContent="menu" // to dynamically choose "menue","div","ul" etc. when reused
        //if you want to use existing component you can use it in {Section} fromat note:do not use html tags, just the name wil suffice
        buttons={
          //  all the buttons inside this prop are dynamically rendered through tabs component
          <>
            <TabButton
              isSelected={tabContent === "components"}
              onSelect={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      />

      {!tabContent ? (
        <p>Please select a Topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre>
            <code>{EXAMPLES[tabContent].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}

export default Examples;
