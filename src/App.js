import React from "react";
import { Router } from "@reach/router";
import Welcome from "./components/Welcome";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Welcome default />
      </Router>
    </>
  );
};

export default App;
