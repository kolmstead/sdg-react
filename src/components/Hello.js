import React, { Component } from 'react';
import sdg07 from '../UNimages/un17banner.png';

// const imgSrc = "sdg07.png";

class Hello extends Component {
  render() {
    return (
      <div><h1>Hello, {this.props.name}</h1><img src={sdg07} alt="sdg 7" id="sdg-banner" style={{width:100}}/></div>
    );
  }
} 

export default Hello;

// React.render(
//     <div>
//         {
//             names.map(function (name) {
//                 return <div>Hello, {name}!</div>
//             })
//         }
//     </div>