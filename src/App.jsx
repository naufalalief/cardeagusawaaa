import React, { useRef } from "react";
import Card from "./components/card/Card.jsx";
import Page from "./components/layout/Page.jsx";
import CardLayout from "./components/layout/CardLayout.jsx";
const App = () => {
  const directions = ["horizontal", "vertical"];
  const cardContainerRef = useRef(null);
  return (
    <div className="">
      <Page>
        {/* <Card movementDirections={("horizontal", "vertical")} /> */}
        <CardLayout>
          <Card
            content={"inverted"}
            variant={"inverted"}
            cardContainerRef={cardContainerRef}
          />
          <Card
            content={"normal"}
            variant={"normal"}
            cardContainerRef={cardContainerRef}
          />
        </CardLayout>
      </Page>
    </div>
  );
};

export default App;
