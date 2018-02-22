import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import "./movies.css";

export default class Movies extends Component {

  static propTypes = {
    movies: PropTypes.array.isRequired
  };

  render() {
    const { movies } = this.props;

    return (
      <ul id="movies">
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie}/>
        ))}
      </ul>
    );
  }
}