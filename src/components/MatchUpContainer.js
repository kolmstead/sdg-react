import React from 'react';
import focusAreas from './unObject';
import MatchUp from './MatchUp';
import { getStuff, saveStuff, getNewPickInMatch } from './stuff';
import { getNewPick } from './pairSupport';
import imgBlob from './imageExports';
import Button from './Button';
import zeroScores from './zeroScores';
import SortedGoal from './SortedGoal';
import SimpleShow from './SimpleShow';
import ConsiderLater from './ConsiderLater';

class MatchUpContainer extends React.Component {
  
  constructor (props) {
    super();
    this.changeMatch = this.changeMatch.bind(this);
    this.scoreWinner = this.scoreWinner.bind(this);
    this.sortScores = this.sortScores.bind(this);
    this.resetScores = this.resetScores.bind(this);
    this.saveScoresToState = this.saveScoresToState.bind(this);
    this.pickForLater = this.pickForLater.bind(this);
    
    this.state = {
      considerLater: JSON.parse(localStorage.getItem('considerLater')),
      newPair: JSON.parse(localStorage.getItem('newPair')),
      unList: Object.keys(focusAreas),
      scoredFA: JSON.parse(localStorage.getItem('focusAreasJSON')),
      scores: JSON.parse(localStorage.getItem('unScores')),
      unPick: JSON.parse(localStorage.getItem('unPick')),
      zeroScoresForReset: zeroScores,
      sortedScores: JSON.parse(localStorage.getItem('sortedScores')),
      isHidden: true,
    };
  }
  
  pickWinner(e, unList, unPick, considerLater, newPair, scores){
    this.scoreWinner(e, unList, unPick, considerLater, newPair, scores);
    this.changeMatch(unList, unPick, considerLater, newPair);
  }
  
  scoreWinner(e, unList, unPick, considerLater, newPair, scores){
    const winner = e.target.alt;
    const loser = winner !== unPick[0] ? unPick[0] : unPick[1];
    const loserScore = scores[loser];
    const winnerScore = loserScore > scores[winner] ? loserScore + 1 : scores[winner] + 1;
    const newScores = scores;
    newScores[winner] = winnerScore;
    saveStuff('unScores', newScores);
    this.saveScoresToState();
    this.sortAndSave();
  }
  
  changeMatch(unList, unPick, considerLater, newPair) {
    unPick = this.state.unPick;
    newPair = [];
  
    let i = 0;
    for ( i=0; i<2; i++) {
      getNewPickInMatch(unList, unPick, considerLater, newPair);
    } 
    this.setState({unPick: newPair});
    saveStuff('newPair', newPair);
    saveStuff('unPick', newPair);
    getStuff('focusAreasJSON').then(focusAreas => this.setState({focusAreas: focusAreas}));
  }
 
 resetConsiderLater(){
   this.setState({considerLater: []});
   let reset = [];
   saveStuff('considerLater', reset);
 }
 
 resetScores(){
  saveStuff('unScores', this.state.zeroScoresForReset );
 }
 
 saveScoresToState(){
   getStuff('unScores').then((unScores)=>this.setState({ scores: unScores }));
 }
 
 resetAndSaveScores(){
  this.resetScores();
  this.saveScoresToState();
 }
 
  sortScores (scores) {
    const scoresToSort = scores;
      let mySortedScores = Object.entries(scoresToSort)
        .sort((x,y) => y[1] - x[1]);
      saveStuff('sortedScores', mySortedScores);
      return mySortedScores;
  }
  
  sortAndSave(){
    getStuff('unScores')
     .then((scores)=>this.sortScores(scores))
     .then((mySortedScores)=>this.setState({sortedScores:mySortedScores}));
  }
  
  // need function to add to considerLater list and replace that pick in the current unPick/pair
  pickForLater(e){
    const pick = e.target.id;
    const laterPick = pick === "later1" ? this.state.unPick[0] : this.state.unPick[1];
    let considerLaterList = this.state.considerLater;
    if (considerLaterList.length > 11) {
      window.alert("You've reached the max adds to your considerLater list.");
      return;
    } else {
    considerLaterList.push(laterPick);
    saveStuff('considerLater', considerLaterList);
    this.setState({ considerLater: considerLaterList });
    this.replacePickedForLater(pick);
    }
  }
  
  replacePickedForLater(pick) {
    const pickToReplace = pick === "later1" ? this.state.unPick[0] : this.state.unPick[1];
    const indexOfPick = pick === "later1" ? 0 : 1;
    let unPickObj = new Set(this.state.unPick); //convert array to Object
    unPickObj.delete(pickToReplace);
    let unPickArray = [...unPickObj]; // convert object back to array
    let unList = this.state.unList;
    getNewPick(unList, unPickArray, this.state.considerLater);
    if (indexOfPick===0) {
      unPickArray.reverse();
      this.setState({unPick:unPickArray});
    } else {
      this.setState({unPick: unPickArray});
      saveStuff('unPick', unPickArray);
      saveStuff('newPair', unPickArray);
      return unPickArray;
    }
  }
  
  showPickInfo(e) {
    const pick = e.target.id;
    const info = this.state.scoredFA;
    console.log("info?", info[pick].info);
    this.setState({ isHidden:!this.state.isHidden });
  }


  render() {
  const { unList, unPick, considerLater, newPair, scores } = this.state;
  
    return (
      <div className="matchup-container">
        <MatchUp unPick1={unPick[0]} unPick2={unPick[1]} score1={scores[unPick[0]]} score2={scores[unPick[1]]} handleChange={(e)=>this.pickWinner(e, unList, unPick, considerLater, newPair, scores)} img1={imgBlob[unPick[0]]} img2={imgBlob[unPick[1]]} {...this.state}
          greeting="hello"
          pickForLater={(e)=>this.pickForLater(e)}
          showPickInfo={(e)=>this.showPickInfo(e)}
          className="matchup-container"
        />
        <SortedGoal {...this.state} />
        <Button handleClick={()=>this.resetAndSaveScores()} label="Reset Scores" id="button1"/>
        <Button handleClick={()=>this.resetConsiderLater()} label="Reset ConsiderLater" id="button2"/>
        <ConsiderLater {...this.state} />
        {!this.state.isHidden && <SimpleShow  stuff={this.state.scoredclFA[unPick[0]].label}/>}


      </div>
    );
  }
}

export default MatchUpContainer;