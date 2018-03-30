import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarWarsText from './starWarsText';

export default class StarWars extends Component {
    static propTypes = {
      results: PropTypes.array.isRequired
    };

    render(){
      const { results } = this.props;

      return (
        <ul>
          {results.map((data, i) => (
            <StarWarsText key = {i} article={data}/>
          ))}
        </ul>
      );
    }
}