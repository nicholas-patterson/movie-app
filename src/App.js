import React, { Suspense, lazy } from "react";
import { Router } from "@reach/router";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import "./styles/main.css";
const SingleMovie = lazy(() => import("./components/SingleMovie"));
const TrendingMovies = lazy(() => import("./components/TrendingMovies"));
const SearchMovies = lazy(() => import("./components/SearchMovies"));

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Welcome default />
          <TrendingMovies path="/trending" />
          <SingleMovie path="/movie/:id" />
          <SearchMovies path="/results" />
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
