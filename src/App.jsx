import React from "react";
import Card from "./components/card/Card.jsx";
import Page from "./components/layout/Page.jsx";
import CardLayout from "./components/layout/CardLayout.jsx";
const App = () => {
  return (
    <div className="">
      <Page>
        {/* <Card movementDirections={("horizontal", "vertical")} /> */}
        <CardLayout />
      </Page>
    </div>
  );
};

export default App;
