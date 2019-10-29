import React, { useEffect, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { getTrending, getGenres } from "../actions/";
import InfiniteScroll from "react-infinite-scroller";
import { Fab } from "@material-ui/core";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import { makeStyles } from "@material-ui/core";
const TrendingMovie = lazy(() => import("./TrendingMovie"));

const useStyles = makeStyles({
  root: {
    position: "sticky",
    zIndex: 999,
    top: "90%",
    left: "2rem"
  }
});

const TrendingMovies = props => {
  const classes = useStyles();

  useEffect(() => {
    props.getTrending(1);
    props.getGenres();
  }, []);

  const hasMore =
    props.trending.page < props.trending.total_pages ? true : false;

  const loadFunc = page => {
    props.getTrending(page);
  };

  return (
    <>
      <div className={`${classes.root} fab`}>
        <Fab style={{ backgroundColor: "#2ae1d5" }} href="#">
          <ArrowUpward />
        </Fab>
      </div>

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
                <TrendingMovie
                  key={movies.id}
                  movies={movies}
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

const mapStateToProps = state => {
  return {
    trending: state.trendingReducer.trendingMovies,
    genres: state.genreReducer.genres
  };
};

export default connect(
  mapStateToProps,
  {
    getTrending,
    getGenres
  }
)(TrendingMovies);
