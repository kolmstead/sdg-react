import React from 'react';
import PickForLater from './PickForLater';
import ShowPickInfo from './ShowPickInfo';

const MatchUp = (props) => (

  <div>
    <img src={props.img1} alt={props.unPick1} style={{width: "120px"}} onClick={props.handleChange} />
    <PickForLater label="hi" onClick={props.pickForLater} p4Lid={props.unPick1} key="1" />
    <ShowPickInfo onClick={props.showPickInfo} sPinfoId={props.unPick1} />
    <img src={props.img2} alt={props.unPick2} style={{width: "120px"}} onClick={props.handleChange} />
    <PickForLater label="goodbye" onClick={props.pickForLater} p4Lid={props.unPick2} key="2"/>
    <ShowPickInfo onClick={props.showPickInfo} sPinfoId={props.unPick2} />
  </div>
);

export default MatchUp;