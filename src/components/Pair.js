import React from 'react';
// import Icon from 'material-ui/Icon';
// import IconButton from 'material-ui/IconButton';
import HighlightOff from 'material-ui-icons/HighlightOff';












function PairMatch (props) {
  return (
  <div id="twopics">
    <div id='p1'><div id="p1imgBox"><img src="//placehold.it/150x150" alt="pic1"></img></div></div><HighlightOff id="p1x"/>
    <div id='p2'><div id="p2imgBox"><img src="//placehold.it/150x150" alt="pic2"></img></div></div><HighlightOff id="p2x"/>
  </div>
  );
}

export { PairMatch };