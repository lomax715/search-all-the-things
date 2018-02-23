import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Article extends Component {

  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const { Title, Year, imdbID, Type, Poster } = this.props.article;

    return (
      <li> 
        <img src={Poster}/>
        <h3>{Title}</h3>
        <p>Year made: {Year}</p>
        <p>{Type} | IMDB ID: {imdbID}</p>
      </li>
    );
  }
}