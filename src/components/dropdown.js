import React, { Component } from 'react';


export default class DropDown extends Component {


  handleCategory(){

  }

  render(){
    return (
      <select onChange={this.handleCategory}>
        <option>People</option>
        <option>Films</option>
        <option>Planets</option>
        <option>Species</option>
        <option>Starships</option>
        <option>Vehicles</option>
      </select>
    );
  }
}