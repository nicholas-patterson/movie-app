import React, { useEffect, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { getTrending } from "../actions/";
const TrendingMovie = lazy(() => import("./TrendingMovie"));

const TrendingMovies = props => {
  console.log("PROPS IN COMP", props);
  useEffect(() => {
    props.getTrending();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {props.trending.map((movies, index) => {
        return (
          <Suspense fallback={<div>Loading</div>}>
            <TrendingMovie key={movies.id} movies={movies} index={index} />
          </Suspense>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
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
