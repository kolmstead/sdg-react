import React from 'react';
import imgBlob from './imageExports';

const ConsiderLater = (props) => {
  const laterList = props.considerLater;
  return (
  
    <div id="laterList"><h4>Consider Later List:</h4>
      {laterList.map((item, index) =>
        <img src={imgBlob[item]} alt={item} key={item} style={{width: "60px", boxShadow: "5px 5px 5px rgba(0,0,0,0.4)"}}/>
      )}
      
    </div>
  );
};

export default ConsiderLater;