import React from 'react';
import imgBlob from './imageExports';

const SortedGoal = (props) => {
  const sorted = props.sortedScores.slice(0,5);
  return (
    <div id="sorted">
      {sorted.map((item) => 
        <img src={imgBlob[item[0]]} alt={item[0]} key={item[0]} style={{width: "70px", boxShadow: "5px 5px 5px rgba(0,0,0,0.4)"}} />
      )}
    </div>
  );
};
export default SortedGoal;