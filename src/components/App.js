import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Paging from './Paging';
import Articles from './Articles';
import { search } from '../services/omdbApi';

const PAGE_SIZE = 10;

export default class App extends Component {

  state = {
    articles: null,
    total: 0,
    topic: null,
    page: 1,
    totalResults: 0,
    loading: false,
    error: null
  };

  searchMovie = () => {
    const { topic, page } = this.state;
    
    this.setState({
      loading: true,
      error: null
    });

    search(topic, page, PAGE_SIZE)
      .then(
        ({ Search, totalResults }) => {
          this.setState({ articles: Search, totalResults });
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

  handlePrev = () => this.handlePaging(-1);
  handleNext = () => this.handlePaging(1);

  handlePaging = incr => {
    this.setState(
      prev => ({ page: prev.page + incr }),
      this.searchMovie
    );
  };

  render() {
    const { articles, page, totalResults, loading, error } = this.state;

    return (
      <div className="app">

        <header role="banner" id="header">
          <h1>Search App</h1>
          <Search onSearch={this.handleSearch}/>
        </header>
        
        <main role="main" id="main">
          
          <div>{loading && 'Loading...'}</div>
          <pre>{error && error.message}</pre>

          {articles && (
            <div>
              <Paging totalResults={totalResults}
                page={page} 
                perPage={PAGE_SIZE} 
                onPrev={this.handlePrev} 
                onNext={this.handleNext}/>

              <Articles articles={articles}/>
            </div>
          )}
        </main>

        <footer role="contentinfo" id="footer">
          <p>(c) Search App | <a href="https://github.com/limongoo/meme-generator/tree/ivan" target="_blank" rel="author noopener noreferrer">Ivan Limongan</a></p>
        </footer>

      </div>
    );
  }
}