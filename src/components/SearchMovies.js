import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import { searchMovie } from "../actions";
const SearchResult = lazy(() => import("./SearchResult"));

const SearchMovies = props => {
  console.log("PROPS IN SEARCHMOVIES", props);

  const hasMore = props.info.page < props.info.total_pages ? true : false;

  const loadFunc = page => {
    props.searchMovie(page);
  };

  return (
    <InfiniteScroll
      pageStart={1}
      hasMore={hasMore}
      loadMore={loadFunc}
      loader={<div className="loader">Loading ...</div>}
      threshold={1}
    >
      <div className="flex flex-wrap justify-center">
        {props.results.map((results, index) => {
          return (
            <Suspense fallback={<div>Loading</div>}>
              <SearchResult key={results.id} results={results} index={index} />
            </Suspense>
          );
        })}
      </div>
    </InfiniteScroll>
  );
};

const mapStateToProps = state => {
  return {
    results: state.searchMovieReducer.searchedMovie.results,
    info: state.searchMovieReducer.searchedMovie
  };
};

export default connect(
  mapStateToProps,
  {
    searchMovie
  }
)(SearchMovies);
