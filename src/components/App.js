import React, { Component } from 'react';
import './app.css';
import Search from './Search';
// import Paging from './Paging';
// import Articles from './Articles';
import { search } from '../services/movieApi';

export default class App extends Component {

  state = {
    movies: null,
    total: 0,
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
        ({ titles, totalResults }) => { //return results 
          this.setState({ titles, totalResults });
        },
        error => { //return error if no results
          this.setState({ error, titles: null });
        }
      )
      .then(() => { //remove loading
        this.setState({ loading: false });
      });
  };

  handleSearch = title => {
    this.setState({ title }, this.searchTitles);
  };

  render() {

    const { movies, error, loading, page, title, totalResults } = this.state;

    return (
      <main id="main">
        <header>
          <h1>MoviesNow App</h1>
        </header>
        <section id="search">
          <Search onSearch={this.handleSearch}/>
        </section>

        <div>{loading && 'Loading...'}</div>
        <pre>{error && error.message}</pre>

        <section id="results">
          {/* results go here */}
        </section>
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
      </main>
    );
  }
}