// https://eddyerburgh.me/toggle-visibility-with-react

import React from 'react';

const SimpleShow = (props) => (

 <div id="simpleShow">
   <h4>{props.stuff.infoTitle}</h4>
   <h5>{props.stuff.infoHeader}</h5>
   <p>{props.stuff.infoText}</p>
 </div>

);

export default SimpleShow;