import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StarWarsData extends Component {

    static propTypes = {
      article: PropTypes.object
    };

    render(){
      const { article } = this.props;

      return (
        <li>
          <a>
            <h2>{ article.name}</h2>
          </a>
        </li>
      );
    }
}