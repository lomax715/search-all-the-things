import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StarWarsText extends Component {

    static propTypes = {
      text: PropTypes.object
    };

    render(){
      const { text } = this.props;

      return (
        <li>
          <a>
            <h2>{ text.name}</h2>
          </a>
        </li>
      );
    }
}