import React, { Component } from 'react';
import './App.css';

export default class App extends Component {


  render() {
    // const { } = this.state;

    return (
      <div className="app">

        <header role="banner" id="header">
          <h1>Search App</h1>
        </header>
        
        <main role="main" id="main">
        </main>

        <footer role="contentinfo" id="footer">
          <p>(c) Search App | <a href="https://github.com/limongoo/meme-generator/tree/ivan" target="_blank" rel="author noopener noreferrer">Ivan Limongan</a></p>
        </footer>

      </div>
    );
  }
}