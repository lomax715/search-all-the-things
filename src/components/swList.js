import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwData from './swData';

export default class swList extends Component {
    static propTypes = {
      results: PropTypes.array.isRequired
    };

    render(){
      const { results } = this.props;

      return (
        <ul>
          {results.map((data, i) => (
            <SwData key = {i} article={data}/>
          ))}
        </ul>
      );
    }
}