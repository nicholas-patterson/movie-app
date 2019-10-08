import React, { useEffect, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { getTrending } from "../actions/getTrending";
const TrendingMovie = lazy(() => import("./TrendingMovie"));

const TrendingMovies = props => {
  console.log("PROPS IN COMP", props);
  useEffect(() => {
    props.getTrending();
  }, []);

  return props.trending.map(movies => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <TrendingMovie key={movies.id} movies={movies} />;
      </Suspense>
    );
  });
};

const mapStateToProps = state => {
  console.log("STATE IN MSTP", state);
  return {
    trending: state.trendingReducer.trendingMovies
  };
};

export default connect(
  mapStateToProps,
  {
    getTrending
  }
)(TrendingMovies);
