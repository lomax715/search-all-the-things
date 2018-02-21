import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Paging from './Paging';
import { search } from '../services/omdbApi';

export default class App extends Component {

  searchMovie = () => {
    this.setState({
      loading: true,
      error: null
    });
  }

  handleSearch = topic => {
    this.setState({ topic }), this.searchMovie);
  };

  render() {
    // const { } = this.state;

    return (
      <div className="app">

        <header role="banner" id="header">
          <h1>Search App</h1>
          <Search onSearch={this.handleSearch}/>
        </header>
        
        <main role="main" id="main">
          <Paging />
        </main>

        <footer role="contentinfo" id="footer">
          <p>(c) Search App | <a href="https://github.com/limongoo/meme-generator/tree/ivan" target="_blank" rel="author noopener noreferrer">Ivan Limongan</a></p>
        </footer>

      </div>
    );
  }
}