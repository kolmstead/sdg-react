import React from 'react';

const MatchUp = (props) => (

  <div>
    <img src={props.img1} alt={props.unPick1} style={{width: "120px"}} onClick={props.handleChange} />
    <img src={props.img2} alt={props.unPick2} style={{width: "120px"}} onClick={props.handleChange} />
  </div>
);

export default MatchUp;