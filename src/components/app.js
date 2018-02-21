import React, { Component } from 'react';
import { search } from '../services/starWarsApi.js';
import Search from './search';
import SwData from './swData';
import swList from './swList';


export default class App extends Component {

  state = {
    category: null,
    topic: null,
    error: null
  };


  searchSWAPI = () => {
    this.setState({
      results: null,
      loading: true,
      error: null,
    });
  

    const { topic } = this.state; 

    search(topic).then(
      ({ results }) => 
      { this.setState({ results });
      },
      error => {
        this.setState({ error, results: null });
      });
    
  }; 
  
  handleSearch = topic => {
    this.setState({ topic }, this.searchSWAPI);
  };


  render(){
    const { results } = this.state;
    return (
      <div>
        <header>
          <Search onSearch={this.handleSearch}/>
        </header>

        <div>
          <div results={results}/>
        </div>
      </div>

    );
  }

} 