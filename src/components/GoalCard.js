import React from 'react';
import HighlightOff from 'material-ui-icons/HighlightOff';
import { saveStuff } from './stuff';

class GoalCard extends React.Component {
  
  constructor(props){
    super(props);
    this.handleConsiderLater = this.handleConsiderLater.bind(this);
    this.pickW = this.pickW.bind(this);
  }
  
  pickW(e) {
    const pick = e;
    console.log("jarJar", pick);
    let scores = this.props.scores;
    console.log("blahblah", scores);
    console.log("Score?", scores[pick].label);
    let newScore = scores[pick].score + 1;
    scores[pick].score = newScore;
    console.log("new score is", newScore);
    console.log("tada newscore is", scores[pick].score);
    saveStuff('focusAreasJSON', scores);
  }
  
  handleConsiderLater (e) {
    const pickConsiderLater = e;
    let considerLaterList = this.props.laterList;
    console.log("check my considerLater when picking a cl", considerLaterList);
    if (considerLaterList.length > 9) {
      window.alert("You've reached your max.");
      return;
    } else {
    considerLaterList.push(pickConsiderLater);
    saveStuff('considerLater', considerLaterList);
    this.props.replaceConsiderLater(e);
    }
  }
  

  render() {
    const { imgSource, imgAlt, value, jarJar } = this.props;
    
    return (
       <div key onClick={()=>this.pickW(jarJar)}>
         <img src={imgSource} alt={imgAlt} onClick={this.props.handleChange} />
         <HighlightOff onClick={()=>this.handleConsiderLater(value)} value={value} />
       </div>
    );
  }
}

export default GoalCard;