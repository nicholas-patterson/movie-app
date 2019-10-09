import React from "react";
import { Router } from "@reach/router";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import TrendingMovies from "./components/TrendingMovies";
import SingleMovie from "./components/SingleMovie";
import "./styles/main.css";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Welcome default />
        <TrendingMovies path="/trending" />
        <SingleMovie path="/movie/:id" />
      </Router>
    </div>
  );
};

export default App;
