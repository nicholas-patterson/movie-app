import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import { searchMovie, getGenres } from "../actions";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import { makeStyles } from "@material-ui/core";
import { Fab } from "@material-ui/core";
const SearchResult = lazy(() => import("./SearchResult"));

const useStyles = makeStyles({
  root: {
    position: "sticky",
    zIndex: 999,
    top: "90%",
    left: "2rem",
  },
});

const SearchMovies = (props) => {
  useEffect(() => {
    props.getGenres();
  }, []);

  const classes = useStyles();
  if (props.results.length === 0) {
    return <div>Loading...</div>;
  }

  const hasMore = props.info.page < props.info.total_pages ? true : false;

  const loadFunc = (page) => {
    props.searchMovie(props.recentMovie, page);
  };

  return (
    <>
      <div className={`${classes.root} fab`}>
        <Fab style={{ backgroundColor: "#2ae1d5" }} href="#">
          <ArrowUpward />
        </Fab>
      </div>
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
                <SearchResult
                  key={results.id}
                  results={results}
                  index={index}
                  genres={props.genres}
                />
              </Suspense>
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.searchMovieReducer.searchedMovie.results,
    info: state.searchMovieReducer.searchedMovie,
    recentMovie: state.searchMovieReducer.searchedMovie.searchTerm,
    genres: state.genreReducer.genres,
  };
};

export default connect(mapStateToProps, {
  searchMovie,
  getGenres,
})(SearchMovies);
