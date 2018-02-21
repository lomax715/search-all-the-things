import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './paging.css';

export default class Paging extends Component {

  static propTypes = {
    totalResults: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    onPrev: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired
  };

  render() {
    const { totalResults, page, onPrev, onNext } = this.props;

    const totalPages = Math.ceil(totalResults / 10);

    return (
      <div className="paging">
        <p className="page-string">Page {page} of {totalPages}</p>
        <div className="page-buttons">
          <button onClick={onPrev} disabled={page === 1}>&lt;</button>
          <button onClick={onNext} disabled={page === totalPages}>&gt;</button>
        </div>
      </div>
    );
  }
}