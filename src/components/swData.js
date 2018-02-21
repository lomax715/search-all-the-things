import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SwData extends Component {

    static propTypes = {
      results: PropTypes.object
    };

    render(){
      const { results } = this.props.results;

      return (
        <li>
          <h2>{ results}</h2>
        </li>
      );
    }
}