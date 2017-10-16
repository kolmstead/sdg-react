import React from 'react';
import Button from './Button';

const MatchUp = (props) => (
  
  <div><h1>{props.fred}</h1>
    <p><img src={props.img1} alt={props.unPick1} style={{width: "50px"}} onClick={props.handleChange} /> unPick: {props.unPick1} Score: {props.score1}<Button label="Pick1" handleClick={()=>console.log(props.unPick1)} /></p>
    <p><img src={props.img2} alt={props.unPick2} style={{width: "50px"}} onClick={props.handleChange} /> unPick: {props.unPick2} Score: {props.score2}<Button label="Pick2" handleClick={()=>console.log(props.unPick2)} /></p>
  </div>
);

export default MatchUp;