import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecommendations, getVideo } from "../actions";
import StarRatings from "react-star-ratings";
import ReactPlayer from "react-player";

import "../styles/main.css";

const SingleMovie = props => {
  console.log("PROPS INS SINGLE MOVIE", props);
  useEffect(() => {
    props.getRecommendations(props.singleMovie.results[index].id);
    props.getVideo(props.singleMovie.results[index].id);
  }, []);

  let index = props.id;
  // Convert the index that was typeof strinf to number
  index = +index;
  const myMovie = props.singleMovie.results[index];
  console.log("MY MOVIE", myMovie);
  const baseURL = "https://image.tmdb.org/t/p/";

  // Trim string to certain length and not stop in middle of a word.
  let overview = myMovie.overview;
  const maxLength = 220;
  let trimmedString = overview.substr(0, maxLength);
  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );
  // base link for video
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
          <div className="leading-normal mt-8">
            <h2 className="text-white font-thin text-3xl pl-5">
              {myMovie.title}{" "}
              <span className="text-lg pl-2">
                ({myMovie.release_date.substr(0, 4)})
              </span>
            </h2>
            <h2 className="text-white font-thin w-6/12 pl-5 text-2xl">
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
        </div>
      </div>
      <div className="more-info h-12 lol">
        <h4>Hello World</h4>
      </div>
      <div className="bg-gray-900 flex">
        <div className="w-2/4 border-r-2 border-400-teal">
          <div className="overflow-scroll ht">
            {props.recommended.map(rec => {
              return (
                <div className="flex">
                  <img
                    className="rec-list"
                    alt={rec.title}
                    src={`${baseURL}w342${rec.poster_path}`}
                  />
                  <h4>{rec.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-2/4 border-r-2 border-400-teal">
          <ReactPlayer
            style={{ marginTop: "40px" }}
            url={`${youtubeLink}${props.video.key}`}
            loop={true}
            muted
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("MSTP", state);
  return {
    recommended: state.recommendationReducer.recommendations,
    singleMovie: state.trendingReducer.trendingMovies,
    video: state.videoReducer.video.find(vid => vid.type === "Trailer") || []
  };
};

export default connect(
  mapStateToProps,
  {
    getRecommendations,
    getVideo
  }
)(SingleMovie);
