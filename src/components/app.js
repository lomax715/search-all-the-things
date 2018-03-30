import React, { Component } from 'react';
import { search } from '../services/starWarsApi.js';
import Search from './search';
import StarWarsList from './starWarsList';
import Category from './category';




export default class App extends Component {

  state = {
    category: null,
    topic: null,
    error: null
  };


  searchStarWarsAPI = () => {
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
          <Category/>
        </div>
        <div>{loading && 'Loading...'}</div>
      
        <div>
          {results && <StarWarsList results={results}/>}
        </div>
          
      </div>

    );
  }

} 