import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Article extends Component {

  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const { title, year, imdbID, type, poster } = this.props.article;

    return (
      <li> 
        <img src={poster}/>
        <h3>{title}</h3>
        <p>Year made: {year}</p>
        <p>{type} | IMDB ID: {imdbID}</p>
      </li>
    );
  }
}