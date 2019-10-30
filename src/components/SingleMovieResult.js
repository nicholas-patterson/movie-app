import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecommendations, getVideo, getReviews } from "../actions";
import StarRatings from "react-star-ratings";
import ReactPlayer from "react-player";

import "../styles/main.css";

const SingleMovieResult = props => {
  let index = props.id;
  // Convert the index that was typeof string to number
  index = +index;
  const myMovie = props.movie[index];

  useEffect(() => {
    props.getRecommendations(props.movie[index].id);
    props.getVideo(props.movie[index].id);
    props.getReviews(props.movie[index].id);
  }, [index]);

  const baseURL = "https://image.tmdb.org/t/p/";

  //Trim string to certain length and not stop in middle of a word.
  let overview = myMovie.overview;
  const maxLength = 220;
  let trimmedString = overview.substr(0, maxLength);
  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );
  //base link for video
  const youtubeLink = "https://www.youtube.com/watch?v=";

  return (
    <div className="bg-gray-600">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${baseURL}original${myMovie.backdrop_path})`,
          height: "40vh",
          backgroundPosition: "top center",
          backgroundSize: "cover"
        }}
      >
        <div className="flex items-center">
          <div className="pl-10 pt-12">
            <img
              className="poster-width"
              src={`${baseURL}w342${myMovie.poster_path}`}
              alt={myMovie.title}
            />
          </div>
          <div className="flex w-full">
            <div className="leading-normal mt-8">
              <h2 className="text-white font-thin text-3xl pl-5">
                {myMovie.title}{" "}
                <span className="text-lg pl-2">
                  ({myMovie.release_date.substr(0, 4)})
                </span>
              </h2>
              <h2 className="text-white font-thin w-9/12 pl-5 text-2xl">
                {trimmedString + "..."}
              </h2>
              <div className="stars">
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
                width="350px"
                height="216px"
                style={{ marginTop: "40px", marginRight: "80px" }}
                url={`${youtubeLink}${props.video.key}`}
                loop={true}
                muted
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 flex">
        <div className="w-2/4 border-r-2 border-400-teal">
          <h3 className="text-center font-thin italic ref-text">
            Reviews from others
          </h3>
          <div className="overflow-scroll ht">
            {props.reviews.length === 0 ? (
              <h4 className="text-center text-white text font-thin text-3xl pt-16">
                This movie has no reviews{" "}
                <span role="img" aria-label="crying emoji">
                  &#128557;
                </span>
              </h4>
            ) : (
              props.reviews.map(review => {
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

            {/* {props.reviews.map(review => {
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
            })} */}
          </div>
        </div>
        <div className="w-2/4 border-r-2 border-400-teal">
          <h3 className="text-center font-thin italic ref-text">
            Other movies you may be interested in
          </h3>
          <div className="overflow-scroll ht flex flex-wrap">
            {props.recommended.map(rec => {
              return (
                <div className="mx-auto mb-5">
                  <img
                    className="rec-list"
                    alt={rec.title}
                    src={`${baseURL}w342${rec.poster_path}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recommended: state.recommendationReducer.recommendations,
    singleMovie: state.trendingReducer.trendingMovies,
    video: state.videoReducer.video.find(vid => vid.type === "Trailer") || [],
    reviews: state.reviewsReducer.reviews,
    movie: state.searchMovieReducer.searchedMovie.results
  };
};

export default connect(
  mapStateToProps,
  {
    getRecommendations,
    getVideo,
    getReviews
  }
)(SingleMovieResult);
