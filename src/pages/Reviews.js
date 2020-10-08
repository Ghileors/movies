import React, { Component } from "react";

import ApiFetcher from "../services/ApiFetcher";

import "../index.scss";

export default class Reviews extends Component {
  state = {
    reviews: [],
    isLoading: false,
  };

  componentDidMount() {
    this.handleReviewFetcher();
  }

  handleReviewFetcher = () => {
    this.setState({ isLoading: true });

    ApiFetcher.movieReviewFetcher(this.props.match.params.movieId)
      .then((reviews) =>
        this.setState({
          reviews: reviews.results,
        })
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <ul className="ReviewGallery">
          {reviews.length > 0 ? (
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <div className="ReviewItem">
                  <h3 className="ReviewHeader">{author}</h3>
                  <p>"{content}"</p>
                </div>
              </li>
            ))
          ) : (
            <p className="DefaultReviewInfo">So far no reviews here...</p>
          )}
        </ul>
      </div>
    );
  }
}
