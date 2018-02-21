import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './Search.css';

export default class Search extends Component {
  
  render() {

    return (
      <form className={styles.search}>
        <label>
          Search For:
          <input/>
        </label>
        <button>Search</button>
      </form>
    );
  }
}