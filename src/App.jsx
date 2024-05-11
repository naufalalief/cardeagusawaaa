import React from "react";
import Card from "./components/card/Card.jsx";
import Page from "./components/layout/Page.jsx";
const App = () => {
  const directions = ["horizontal", "vertical"];
  return (
    <div className="">
      <Page>
        {/* <Card movementDirections={("horizontal", "vertical")} /> */}
        <Card />
      </Page>
    </div>
  );
};

export default App;
