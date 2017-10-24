import React from 'react';
import imgBlob from './imageExports';

const SortedGoal = (props) => {
  const sorted = props.sortedScores;
  return (
    <div>
      {sorted.map((item) => 
        <img src={imgBlob[item[0]]} alt={item[0]} key={item[0]} style={{width: "70px"}} />
      )}
    </div>
  );
};
export default SortedGoal;