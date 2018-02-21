import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Paging from './Paging';
import { search } from '../services/omdbApi';

const PAGE_SIZE = 10;

export default class App extends Component {

  state = {
    articles: null,
    total: 0,
    topic: null,
    page: 1,
    loading: false,
    error: null
  };

  searchMovie = () => {
    this.setState({
      loading: true,
      error: null
    });

    const { topic, page } = this.state;

    search(topic, page, PAGE_SIZE)
      .then(
        ({ articles, totalResults }) => {
          this.setState({ articles, totalResults });
        },
        error => {
          this.setState({ error, articles: null });
        }
      )
      .then(() => {
        this.setState({ loading: false });
      });

  };

  handleSearch = topic => {
    this.setState({ topic }, this.searchMovie);
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