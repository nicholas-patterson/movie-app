import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecommendations, getVideo, getReviews } from "../actions";
import StarRatings from "react-star-ratings";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";
import { Link } from "@reach/router";
import { Helmet } from "react-helmet";

import "../styles/main.css";

const SingleMovie = (props) => {
  const isXs = useMediaQuery({ query: "(max-width: 320px)" });
  const isSm = useMediaQuery({ query: "(max-width: 414px)" });
  const isMd = useMediaQuery({ query: "(max-width: 720px)" });
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
    <>
      <Helmet>
        <title>Movie.me | {myMovie.title}</title>
      </Helmet>
      <div className={isXs || isSm || isMd ? null : "bg-gray-600"}>
        <div className="xs: " style={isXs || isSm || isMd ? null : bg_styles}>
          <div className="flex items-center xs:block sm:block md:block">
            <div className="pl-10 pt-12 xlg:w-2 xs:pl-0 w-11/12 my-0 mx-auto sm:pl-0 md:pt-0 lg:w-0 hidden">
              <img
                className={
                  isXs || isSm ? "xs:my-0 mx-auto w-9/12" : "poster-width"
                }
                src={`${baseURL}w342${myMovie.poster_path}`}
                alt={myMovie.title}
              />
            </div>
            <div className="flex xs:block sm:block w-11/12 lg:items-center md:block w-full">
              <div className="leading-normal mt-8 md:block sm:block xs:block lg:mt-0">
                <h2 className="text-white font-thin text-3xl pl-5 xs:pl-0 text-center sm:pl-0 sm:text-center md:text-center lg:pl-0 lg:text-left lg:pl-12 md:mb-3 md:mt-8 xlg:text-left xlg:pl-12">
                  {myMovie.title}{" "}
                  <span className="text-lg  sm:block italic pl-0">
                    ({myMovie.release_date.substr(0, 4)})
                  </span>
                </h2>
                <h2 className="text-white font-thin  text-2xl  md:block px-12 sm:text-center mb-4  block xs:text-center w-full  block mb-0 md:text-base lg:text-base">
                  {trimmedString + "..."}
                </h2>
                <div className="stars xs:text-center w-11/12 my-0 mx-auto sm:text-center w-11/12 my-0 mx-auto lg:hidden xlg:pl-3">
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
                  width={isXs || isSm ? null : "500px"}
                  height={isXs || isSm ? null : "216px"}
                  className="sm:w-9/12 sm:my-8 mx-auto w-9/12 xs:my-8 mx-auto w-11/12"
                  style={
                    isXs || isSm || isMd
                      ? null
                      : { marginTop: "40px", marginRight: "20px" }
                  }
                  url={`${youtubeLink}${props.video.key}`}
                  loop={true}
                  muted
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 xs:block sm:block md:block lg:flex xlg:flex">
          <div className="border-r-2 border-400-teal xs:w-full xs:border-none sm:w-full sm:border-none xlg:border-r-2 xlg:border-teal-400">
            <h3 className="text-center font-thin italic ref-text">
              Reviews from others
            </h3>
            <div className="overflow-visible ht xs:overflow-visible">
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
          <div className="border-r-2 border-400-teal xs:w-full border-none sm:w-full">
            <h3 className="text-center font-thin italic ref-text">
              Other movies you may be interested in
            </h3>
            <div className="overflow-visible ht flex flex-wrap xs:block overflow-visible">
              {props.recommended.length == 0 ? (
                <h4 className="text-center font-thin text-3xl text-white pt-16">
                  No Movies Available{" "}
                  <span role="img" aria-label="crying emoji">
                    &#128557;
                  </span>
                </h4>
              ) : (
                props.recommended.map((rec) => {
                  return (
                    <div className="mx-auto mb-5">
                      <img
                        className="rec-list xs:my-0 mx-auto w-9/12"
                        alt={rec.title}
                        src={`${baseURL}w342${rec.poster_path}`}
                      />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
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
