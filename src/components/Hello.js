import React, { Component } from 'react';
import sdg07 from '../UNimages/un17banner.png';

class Hello extends Component {
  render() {
    return (
      <div><h1>Hello, {this.props.name}</h1><img src={sdg07} alt="sdg 7" id="sdg-banner"/></div>
    );
  }
} 

export default Hello;