import React, { Component } from 'react';
import { search } from '../services/starWarsApi.js';
import Search from './search';


export default class App extends Component {

  state = {
    category: null,
    topic: null,
    error: null
  };


  searchSWAPI = () => {
    this.setState({
      loading: true,
      error: null,
    });
  

    const { topic } = this.state; 

    search(topic).then(
      ({ swData }) => 
      { this.setState({ swData });
      },
      error => {
        this.setState({ error, articles: null });
      });
    
  }; 
  
  handleSearch = topic => {
    this.setState({ topic }, this.searchSWAPI);
  };


  render(){
    return (
      <header>
        <Search onSearch={this.handleSearch}/>
      </header>

    );
  }

} 