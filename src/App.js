import React from "react";
import { Router } from "@reach/router";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import "./styles/main.css"

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Welcome default />
      </Router>
    </div>
  );
};

export default App;
