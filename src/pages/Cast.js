import React, { Component } from "react";

import ApiFetcher from "../services/ApiFetcher";

import defaultAvatar from "../assets/default-avatar.png";

import "../index.scss";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

export default class Cast extends Component {
  state = {
    castInfo: [],
    isLoading: false,
  };

  componentDidMount() {
    this.handleCastFetcher();
  }

  handleCastFetcher = () => {
    this.setState({ isLoading: true });

    ApiFetcher.movieCastFetcher(this.props.match.params.movieId)
      .then((castInfo) =>
        this.setState({
          castInfo: castInfo.cast,
        })
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { castInfo } = this.state;
    return (
      <div>
        {castInfo && (
          <ul className="CastGallery">
            {castInfo.map(
              ({ profile_path, cast_id, name }) =>
                profile_path && (
                  <li key={cast_id}>
                    <div className="CastItem">
                      <img
                        src={
                          profile_path
                            ? `${baseImgUrl}${profile_path}`
                            : defaultAvatar
                        }
                        alt="Actor's poster"
                        width="100"
                      />

                      <h4>{name}</h4>
                    </div>
                  </li>
                )
            )}
          </ul>
        )}
      </div>
    );
  }
}
