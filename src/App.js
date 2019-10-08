import React from "react";
import { Router } from "@reach/router";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <Router>
      <Welcome default />
    </Router>
  );
};

export default App;
