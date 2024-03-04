// App.js
import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Scaner from "./Scaner";
import FitnessDetails from "./FitnessDetails";
import Form from "./Form";

const App = () => {
  return (
    <div style={{ width: "428px", height: "1379px", margin: "0" }}>
      <Header />
      <SubHeader />
      <Scaner />
      <FitnessDetails />
      <Form />
      {/* Your other components and content */}
    </div>
  );
};

export default App;
