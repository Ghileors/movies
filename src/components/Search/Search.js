import React, { Component } from "react";

import Button from "../Button/Button";

import style from "./Search.module.scss";

export default class Search extends Component {
  state = {
    value: "",
    isLoading: false,
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.value);

    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={style.SearchForm}>
        <input
          type="text"
          onChange={this.handleChange}
          className={style.SearchFormInput}
          value={this.state.value}
          placeholder="Search movie here..."
          autoFocus
        />
        <Button>
          <span className={style.SearchIcon}></span>
        </Button>
      </form>
    );
  }
}
