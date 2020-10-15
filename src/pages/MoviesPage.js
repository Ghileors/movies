import React, { Component } from "react";

import getQueryParams from "../utils/getQueryStringParams";

import ApiFetcher from "../services/ApiFetcher";

import Search from "../components/Search/Search";
import Notification from "../components/Notification";
import MovieCard from "../components/MovieCard/MovieCard";
import Loader from "../components/Loader/Loader";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    page: 1,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    query && this.handleSearchFetcher(query);
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    prevQuery !== nextQuery && this.handleSearchFetcher(nextQuery);
  }

  handleSearchQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
    this.setState({
      page: 1,
      movies: [],
    });
  };

  handleSearchFetcher = async (query) => {
    this.setState({ isLoading: true });

    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });

    const { results } = await ApiFetcher.searchFetcher(query);

    this.setState({
      movies: results,
      isLoading: false,
    });
  };

  render() {
    const { movies, isLoading, error } = this.state;
    const { match, location } = this.props;

    return (
      <div>
        <Search onSubmit={this.handleSearchQuery} />

        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}

        <ul className="MoviesGallery">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              match={match.url}
              location={location}
            />
          ))}
        </ul>

        {isLoading && <Loader />}

        {movies.length > 0 && !isLoading && (
          <button
            className="showMoreBtnStyle"
            onClick={() => this.handleSearchFetcher}
          >
            <span className="buttonTitle">SHOW MORE</span>
          </button>
        )}
      </div>
    );
  }
}
