import React from "react";
import { Router } from "@reach/router";
import Welcome from "./components/Welcome";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <Router>
        <Welcome default />
      </Router>
    </div>
  );
};

export default App;
