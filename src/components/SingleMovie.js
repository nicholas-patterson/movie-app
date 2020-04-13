import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecommendations, getVideo, getReviews } from "../actions";
import StarRatings from "react-star-ratings";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";
import { Link } from "@reach/router";

import "../styles/main.css";

const SingleMovie = (props) => {
  const isXs = useMediaQuery({ query: "(max-width: 320px)" });
  const isSm = useMediaQuery({ query: "(max-width: 414px)" });
  const isLg = useMediaQuery({ query: "(max-width: 1024px)" });
  let index = props.id;
  // Convert the index that was typeof string to number
  index = +index;
  const myMovie = props.singleMovie.results[index];

  useEffect(() => {
    props.getRecommendations(props.singleMovie.results[index].id);
    props.getVideo(props.singleMovie.results[index].id);
    props.getReviews(props.singleMovie.results[index].id);
  }, [index]);

  const baseURL = "https://image.tmdb.org/t/p/";

  //Trim string to certain length and not stop in middle of a word.
  console.log("PROPS SINGLE MOVIE", props.singleMovie.results);
  let overview = myMovie.overview;
  const maxLength = 220;
  let trimmedString = overview.substr(0, maxLength);
  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );
  //base link for video
  const youtubeLink = "https://www.youtube.com/watch?v=";

  const bg_styles = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${baseURL}original${myMovie.backdrop_path})`,
    height: "40vh",
    backgroundPosition: "top center",
    backgroundSize: "cover",
  };

  return (
    <div className={isXs || isSm ? null : "bg-gray-600"}>
      <div className="xs: " style={isXs || isSm ? null : bg_styles}>
        <div className="flex items-center xs:block sm:block">
          <div className="pl-10 pt-12 xlg:w-2 xs:pl-0 w-11/12 my-0 mx-auto sm:pl-0 md:pt-0 lg:w-0 hidden ">
            <img
              className={
                isXs || isSm ? "xs:my-0 mx-auto w-9/12" : "poster-width"
              }
              src={`${baseURL}w342${myMovie.poster_path}`}
              alt={myMovie.title}
            />
          </div>
          <div className="flex w-full xs:block sm:block lg:items-center">
            <div className="leading-normal mt-8 md:hidden sm:block xs:block lg:mt-0">
              <h2 className="text-white font-thin text-3xl pl-5 xs:pl-0 text-center sm:pl-0 lg:pl-0">
                {myMovie.title}{" "}
                <span className="text-lg  sm:block italic pl-0">
                  ({myMovie.release_date.substr(0, 4)})
                </span>
              </h2>
              <h2 className="text-white font-thin w-9/12  text-2xl  xlg:w-9/12 lg:w-11/12 text-lg ml-10  md:hidden sm:px-4 mb-4 pl-0 block xs:text-center pl-0 w-full block">
                {trimmedString + "..."}
              </h2>
              <div className="stars xs:text-center w-11/12 my-0 mx-auto sm:text-center w-11/12 my-0 mx-auto lg:hidden">
                <StarRatings
                  rating={Math.floor(myMovie.vote_average / 2)}
                  starRatedColor="Gold"
                  starDimension="20px"
                  numberOfStars={5}
                />
              </div>
            </div>
            <div>
              <ReactPlayer
                width={isXs || isSm ? null : "350px"}
                height={isXs || isSm ? null : "216px"}
                className="xs:my-8 mx-auto w-11/12 sm: my-8 mx-auto w-11/12"
                style={
                  isXs || isSm
                    ? null
                    : { marginTop: "40px", marginRight: "80px" }
                }
                url={`${youtubeLink}${props.video.key}`}
                loop={true}
                muted
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 flex xs:block sm:block">
        <div className="w-2/4 border-r-2 border-400-teal x: w-full border-none">
          <h3 className="text-center font-thin italic ref-text">
            Reviews from others
          </h3>
          <div className="overflow-scroll ht xs:overflow-visible">
            {props.reviews.length === 0 ? (
              <h4 className="text-center font-thin text-3xl text-white pt-16">
                This movie has no reviews{" "}
                <span role="img" aria-label="crying emoji">
                  &#128557;
                </span>
              </h4>
            ) : (
              props.reviews.map((review) => {
                return (
                  <ul className="reviews px-10 mb-10">
                    <blockquote className="text-gray-400 quote">
                      {review.content.substr(0, 500) + "..."}
                    </blockquote>
                    <cite className="text-gray-400 italic">
                      {"- " + review.author}
                    </cite>
                  </ul>
                );
              })
            )}
          </div>
        </div>
        <div className="w-2/4 border-r-2 border-400-teal xs:w-full border-none sm:w-full">
          <h3 className="text-center font-thin italic ref-text sm:text-2xl">
            Other movies you may be interested in
          </h3>
          <div className="overflow-scroll ht flex flex-wrap xs:block overflow-visible">
            {props.recommended.map((rec) => {
              console.log("INDEX", rec);
              return (
                <div className="mx-auto mb-5">
                  {/* <Link to={`/movie/${rec.id}`}> */}
                  <img
                    className="rec-list xs:my-0 mx-auto w-9/12"
                    alt={rec.title}
                    src={`${baseURL}w342${rec.poster_path}`}
                  />
                  {/* </Link> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recommended: state.recommendationReducer.recommendations,
    singleMovie: state.trendingReducer.trendingMovies,
    video: state.videoReducer.video.find((vid) => vid.type === "Trailer") || [],
    reviews: state.reviewsReducer.reviews,
  };
};

export default connect(mapStateToProps, {
  getRecommendations,
  getVideo,
  getReviews,
})(SingleMovie);
