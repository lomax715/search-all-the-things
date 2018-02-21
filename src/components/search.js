import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component{

    static propTypes = {
      onSearch: PropTypes.func.isRequired
    };

    state = {
      search: ''
    };

    handleSubmit = (event) => {
      event.preventDefault();
      const { search } = this.state;
      if(!search) return;

      this.props.onSearch(search);
    };

    handleChange = ({ target }) => {
      this.setState({ search: target.value });
    };

    render(){
      const { search } = this.state;

      return (
        <form onSubmit={this.handleSubmit}>
          <label>Search Star Wars for:</label>
          <input value={search} onChange={this.handleChange}/>
          <button>Search</button>
        </form>

      );
    }
}