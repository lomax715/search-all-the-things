import React, { Component } from 'react';


export default class Category extends Component {


  handleCategory(){

  }

  render(){
    return (
      <select onChange={this.handleCategory}>
        <option>People</option>
        <option>Planets</option>
        <option>Films</option>
        <option>Vehicles</option>
        <option>Factions</option>
      </select>
    );
  }
}