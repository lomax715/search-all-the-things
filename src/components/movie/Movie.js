
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';

export default class Movie extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired
  };

  render() {
    const { Title, Year, Poster } = this.props.movie;

    if(Poster === 'N/A') {
      return (
        <li>
          <p className="missing-poster">?</p>
          <h2>{Title}</h2>
          <p>{Year}</p>
        </li>
      );
    }
    
    return (
      <li>
        <img src={Poster}/>
        <h2>{Title}</h2>
        <p>{Year}</p>
      </li>
    );
  }
}