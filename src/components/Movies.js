import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

export default class Movies extends Component {

  static propTypes = {
    movies: PropTypes.array.isRequired
  };

  render() {
    const { movies } = this.props;

    return (
      <ul>
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie}/>
        ))}
      </ul>
    );
  }
}