import React, { Component } from 'react';
import './app.css';
import Search from './Search';
// import Paging from './Paging';
import Movies from './Movies';
import { search } from '../services/movieApi';
import Paging from './Paging';

export default class App extends Component {

  state = {
    movies: null,
    totalResults: 0,
    title: null,
    page: 1,
    loading: false,
    error: null
  };

  searchTitles = () => {
    this.setState({
      loading: true,
      error: null
    });

    const { title, page } = this.state;

    search(title, page) //search movies API
      .then(
        ({ Search, totalResults }) => { //return results 
          const convertedResults = parseInt(totalResults);
          this.setState({ movies: Search, totalResults: convertedResults });
        },
        error => { //return error if no results
          this.setState({ error, movies: null });
        }
      )
      .then(() => { //remove loading
        this.setState({ loading: false });
      });
  };

  handleSearch = title => {
    this.setState({ title }, this.searchTitles);
  };

  handlePrev = () => this.handlePaging(-1);
  handleNext = () => this.handlePaging(1);

  handlePaging = increment => {
    this.setState(
      prev => ({ page: prev.page + increment }), //increment page
      this.searchTitles //then search new page
    );
  };

  render() {

    const { movies, error, loading, page, title, totalResults } = this.state;

    const resultsHeader = <div>Search for &quot;{title}&quot; found {totalResults} matches</div>;
    const noSearch = <div>Please search above</div>;

    return (
      <div id="container">
        <main id="main">
          <header>
            <h1>MoviesNow App</h1>
          </header>
          <section id="search">
            <Search onSearch={this.handleSearch}/>
            {movies ? resultsHeader : noSearch}
          </section>
          {loading && (
            <img src={require('./loading-icon.gif')}/>
          )}
          <pre>{error && error.message}</pre>

          <section id="results">
            {movies && (
              <div>
                <Paging totalResults={totalResults}
                  page={page}
                  onPrev={this.handlePrev}
                  onNext={this.handleNext}/>
                <Movies movies={movies}/>
                <Paging totalResults={totalResults}
                  page={page}
                  onPrev={this.handlePrev}
                  onNext={this.handleNext}/>
              </div>
            )}
          </section>
        </main>

        <footer id="footer">
          <ul>
            <li>
              <a href="https://github.com/Theartbug" target="_blank" rel="noopener noreferrer">
                <span className="fa fa-github fa-3x"></span>
                <span className="clip">Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/graceprovost/" target="_blank" rel="noopener noreferrer">
                <span className="fa fa-linkedin fa-3x"></span>
                <span className="clip">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="mailto:grace.g.provost@gmail.com">
                <span className="fa fa-envelope-square fa-3x"></span>
                <span className="clip">Email</span>
              </a>
            </li>
          </ul>
          <small>&copy; 2018 Grace Provost | Student Work</small>
        </footer>
      </div>
    );
  }
}