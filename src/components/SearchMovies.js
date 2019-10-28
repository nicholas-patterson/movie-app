import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import { searchMovie } from "../actions";
const SearchResult = lazy(() => import("./SearchResult"));

const SearchMovies = props => {
  if (props.results.length === 0) {
    return <div>Loading...</div>;
  }

  const hasMore = props.info.page < props.info.total_pages ? true : false;

  const loadFunc = page => {
    props.searchMovie(props.recentMovie, page);
  };

  return (
    <InfiniteScroll
      pageStart={0}
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
    info: state.searchMovieReducer.searchedMovie,
    recentMovie: state.searchMovieReducer.searchedMovie.searchTerm
  };
};

export default connect(
  mapStateToProps,
  {
    searchMovie
  }
)(SearchMovies);
