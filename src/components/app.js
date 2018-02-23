import React, { Component } from 'react';
import { search } from '../services/starWarsApi.js';
import Search from './search';
import SwList from './swList';
import Dropdown from './dropdown';




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
      })
      .then(() => {
        this.setState({ loading: false });
      });
    
  }; 
  
  handleSearch = topic => {
    this.setState({ topic }, this.searchSWAPI);
  };


  render(){
    const { results, loading } = this.state;
    return (
      <div>
        <header>
          <Search onSearch={this.handleSearch}/>
        </header>
        <div>
          <Dropdown/>
        </div>
        <div className="loading">{loading && 'Loading...'}</div>
      
        <div>
          {results && <SwList results={results}/>}
        </div>
          
      </div>

    );
  }

} 