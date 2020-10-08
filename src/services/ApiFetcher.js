const apiKey = "1d424faf116af904ef0d550be5e8fe28";
const baseUrl = "https://api.themoviedb.org/3";

const defaultMoviesFetcher = async () => {
  const response = await fetch(
    `${baseUrl}/trending/movie/week?api_key=${apiKey}`
  );
  return await response.json();
};

const searchFetcher = async (query, page = 1) => {
  const response = await fetch(
    `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=true`
  );
  const parsedResponse = await response.json();
  return parsedResponse.results;
};

const movieDetailsFetcher = async (movieID) => {
  const response = await fetch(
    `${baseUrl}/movie/${movieID}?api_key=${apiKey}&language=en-US`
  );
  return await response.json();
};

const movieCastFetcher = async (movieID) => {
  const response = await fetch(
    `${baseUrl}/movie/${movieID}/credits?api_key=${apiKey}&language=en-US`
  );
  return await response.json();
};

const movieReviewFetcher = async (movieID) => {
  const response = await fetch(
    `${baseUrl}/movie/${movieID}/reviews?api_key=${apiKey}&page=1`
  );
  return await response.json();
};

const movieVideoFetcher = async (movieID) => {
  const response = await fetch(
    `${baseUrl}/movie/${movieID}/reviews?api_key=${apiKey}&page=1`
  );
  return await response.json();
};

export default {
  defaultMoviesFetcher,
  searchFetcher,
  movieDetailsFetcher,
  movieCastFetcher,
  movieReviewFetcher,
  movieVideoFetcher,
};
