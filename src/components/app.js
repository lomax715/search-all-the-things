import React, { Component } from 'react';
import search from '../services/starWarsApi';


export default class App extends Component{

    state = {
      category: 'people',
      topic: 'Skywalker'
    };


    searchSWAPI = () => {
      search(this.state.category, this.state.topic).then(
        ({ name }) => this.setState({ name })
      );
    }
} 