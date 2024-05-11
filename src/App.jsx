import React from "react";
import Card from "./components/card/Card.jsx";
import Page from "./components/layout/Page.jsx";
const App = () => {
  const directions = ["left", "right", "top", "bottom"];
  return (
    <div className="">
      <Page>
        <Card
          movementDirections={directions}
          initialPosition={{ x: 0, y: 0 }}
        />
      </Page>
    </div>
  );
};

export default App;
