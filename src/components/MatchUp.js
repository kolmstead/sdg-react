import React from 'react';
import PickForLater from './PickForLater';
import ShowPickInfo from './ShowPickInfo';

const MatchUp = (props) => (

  <div className="matchup">
    <img src={props.img1} alt={props.unPick1} style={{width: "120px"}} onClick={props.handleChange} className="imgPair1" />
    <PickForLater label="hi" onClick={props.pickForLater} p4Lid="later1" key="1" id="later1"/>
    <ShowPickInfo onClick={props.showPickInfo} sPinfoId="info-1" />
    <img src={props.img2} alt={props.unPick2} style={{width: "120px"}} onClick={props.handleChange} className="imgPair2" />
    <PickForLater label="goodbye" onClick={props.pickForLater} p4Lid="later2" key="2" id={props.unPick2} name={props.unPick2}/>
    <ShowPickInfo onClick={props.showPickInfo} sPinfoId="info-2" />
  </div>
);

export default MatchUp;

// swapping props for id
    // <PickForLater label="goodbye" onClick={props.pickForLater} p4Lid={props.unPick2} key="2" id="later2"/>