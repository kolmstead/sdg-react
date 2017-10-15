import React from 'react';
import HighlightOff from 'material-ui-icons/HighlightOff';
import { saveStuff } from './stuff';
import scoreMore from './unScores'; //this is for MatchUpContainer testing

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
    let myPair = this.props.myPair;
    console.log("My Pair is", myPair);
    // write an if statement if pick or myPair not 0 then leapfrog score else add 1
    // let scoreMost = scoreMore[pick] + scoreMore[myPair];
    let scoreMost = scoreMore[pick] + 1; // also get rid of reset; get scores from local
    scoreMore[pick]=scoreMost;
    console.log("scoreMost is", scoreMost);
    console.log("is it?", scoreMore);
    console.log("score pick is", pick, scoreMore[pick]);
    saveStuff('unScores', scoreMore);
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