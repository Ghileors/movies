import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import ApiFetcher from "../services/ApiFetcher";

import routes from "../routes";

import Notification from "../components/Notification";
import MovieReviewSection from "../components/MovieReviewSection";
import Cast from "./Cast";
import Reviews from "./Reviews";
import Loader from "../components/Loader/Loader";

export default class MovieDetailsPage extends Component {
  state = {
    searchQuery: "",
    details: null,
    isLoading: false,
  };

  componentDidMount() {
    this.handleDetailsFetcher();
  }

  handleDetailsFetcher = () => {
    this.setState({ isLoading: true });

    ApiFetcher.movieDetailsFetcher(this.props.match.params.movieId)
      .then((details) =>
        this.setState({
          details,
        })
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleGoBackBtn = () => {
    const {
      location: { state },
      history,
    } = this.props;

    if (state && state.from) {
      history.push(state.from);
      return;
    }

    history.push(routes.home);
  };

  render() {
    const { details, isLoading, error } = this.state;
    const { match } = this.props;
    const { movieId } = this.props.match.params;

    return (
      <div>
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}

        {details && (
          <MovieReviewSection
            details={details}
            onClick={this.handleGoBackBtn}
          />
        )}
        <hr />

        <div className="HeaderForCastReviews">
          <h2 className="castHeaderTitle">Additional information:</h2>

          <NavLink
            to={`/movies/${movieId}/cast`}
            className="NavigationItem"
            activeClassName="NavigationLinkActive"
          >
            Cast
          </NavLink>

          <NavLink
            to={`/movies/${movieId}/reviews`}
            className="NavigationItem"
            activeClassName="NavigationLinkActive"
          >
            Reviews
          </NavLink>

          <br />
        </div>
        <hr />
        {isLoading && <Loader />}

        <Switch>
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </Switch>
      </div>
    );
  }
}
