import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarWarsData from './starWarsData';

export default class StarWarsList extends Component {
    static propTypes = {
      results: PropTypes.array.isRequired
    };

    render(){
      const { results } = this.props;

      return (
        <ul>
          {results.map((data, i) => (
            <StarWarsData key = {i} article={data}/>
          ))}
        </ul>
      );
    }
}