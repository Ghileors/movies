import React from "react";
import PropTypes from "prop-types";

import style from "./MovieReviewSection.module.scss";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

const MovieReviewSection = ({ details, onClick }) => (
  <div className={style.detailsArticle}>
    <img
      className={style.moviePoster}
      src={`${baseImgUrl}${details.poster_path}`}
      alt="Movie poster"
    />
    <button className={style.gotoMoviesBtn} onClick={onClick} type="button">
      BACK TO FILMS
    </button>
    <div className={style.reviewArticle}>
      <h1>
        {details.original_title} &#8226; ({details.release_date.slice(0, 4)})
      </h1>
      <p>
        {details.release_date} &#8226;{" "}
        {details.genres && (
          <>{details.genres.map((genre) => genre.name).join(" / ")}</>
        )}{" "}
        &#8226; {Math.trunc(details.runtime / 60)}h {details.runtime % 60}m
      </p>
      <p className={style.tagline}>{details.tagline}</p>
      <p>
        <b>Rating: </b> {details.vote_average} / {details.vote_count} votes
      </p>
      <p className={style.reviewText}>{details.overview}</p>
      {details.production_countries && (
        <p>
          <b>Production countries: </b>

          {details.production_countries
            .map((country) => country.name)
            .join(", ")}
        </p>
      )}
    </div>
    <br />
  </div>
);

export default MovieReviewSection;

MovieReviewSection.propTypes = {
  poster_path: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  genre: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        name: PropTypes.string.isRequired,
      })
    ),
    PropTypes.array,
  ]),
  tagline: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  production_countries: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        name: PropTypes.string.isRequired,
      })
    ),
    PropTypes.array,
  ]),
  onClick: PropTypes.func.isRequired,
};
