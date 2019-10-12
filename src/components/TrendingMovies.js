import React, { useEffect, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { getTrending } from "../actions/";
import InfiniteScroll from "react-infinite-scroller";
//import TrendingMovie from "./TrendingMovie";
const TrendingMovie = lazy(() => import("./TrendingMovie"));

const TrendingMovies = props => {
  console.log("PROPS IN COMP", props);
  useEffect(() => {
    props.getTrending(1);
  }, []);

  if (props.trending.length === 0) {
    return <div>Loading...</div>;
  }

  const hasMore =
    props.trending.page < props.trending.total_pages ? true : false;

  const loadFunc = page => {
    props.getTrending(page);
    console.log("LOAD FUNC", page);
  };

  console.log("TOTAL_PAGES", props.trending.total_pages);
  console.log("PAGE", props.trending.page);
  return (
    <InfiniteScroll
      pageStart={1}
      hasMore={hasMore}
      loadMore={loadFunc}
      loader={<div className="loader">Loading ...</div>}
      threshold={1}
    >
      <div className="flex flex-wrap justify-center">
        {props.trending.results.map((movies, index) => {
          return (
            <Suspense fallback={<div>Loading</div>}>
              <TrendingMovie key={movies.id} movies={movies} index={index} />
            </Suspense>
          );
        })}
      </div>
    </InfiniteScroll>
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
