import React from 'react';
import focusAreas from './unObject';
import MatchUp from './MatchUp';
import { getStuff, saveStuff, getNewPickInMatch } from './stuff';
import imgBlob from './imageExports';
import Button from './Button';
import zeroScores from './zeroScores';
import SortedGoal from './SortedGoal';

class MatchUpContainer extends React.Component {
  
  constructor (props) {
    super();
    this.tryMe = this.tryMe.bind(this);
    this.changeMatch = this.changeMatch.bind(this);
    this.scoreWinner = this.scoreWinner.bind(this);
    this.sortScores = this.sortScores.bind(this);
    this.resetScores = this.resetScores.bind(this);
    this.saveScoresToState = this.saveScoresToState.bind(this);
    
    this.state = {
      considerLater: JSON.parse(localStorage.getItem('considerLater')),
      newPair: JSON.parse(localStorage.getItem('newPair')),
      unList: Object.keys(focusAreas),
      scoredFA: JSON.parse(localStorage.getItem('focusAreasJSON')),
      scores: JSON.parse(localStorage.getItem('unScores')),
      unPick: JSON.parse(localStorage.getItem('unPick')),
      fred: "hey fred!",
      stateA: "huh",
      stateB: "",
      stateC: "",
      zeroScoresForReset: zeroScores,
      sortedScores: JSON.parse(localStorage.getItem('sortedScores')),
    };
  }
  
  bobPick(e, unList, unPick, considerLater, newPair, scores){
    this.scoreWinner(e, unList, unPick, considerLater, newPair, scores);
    this.sortScores(scores);
    this.saveSortedScoresToState();
    this.changeMatch(unList, unPick, considerLater, newPair);
  }
  
  scoreWinner(e, unList, unPick, considerLater, newPair, scores){
    const winner = e.target.alt;
    const loser = winner !== unPick[0] ? unPick[0] : unPick[1];
    const loserScore = scores[loser];
    const winnerScore = loserScore > scores[winner] ? loserScore + 1 : scores[winner] + 1;
    const newScores = scores;
    newScores[winner] = winnerScore;
    this.setState({scores: newScores});
    console.log("going up?", newScores);
    saveStuff('unScores', newScores);
  }
  
  changeMatch(unList, unPick, considerLater, newPair) {
    unPick = this.state.unPick;
    console.log("old pick", unPick);
    newPair = [];
  
    let i = 0;
    for ( i=0; i<2; i++) {
      getNewPickInMatch(unList, unPick, considerLater, newPair);
    } console.log("newPair is now", newPair);
    this.setState({unPick: newPair});
    saveStuff('newPair', newPair);
    saveStuff('unPick', newPair);
    getStuff('focusAreasJSON').then(focusAreas => this.setState({focusAreas: focusAreas}));
  }
  
 tryMe(unList, unPick, considerLater, newPair){
   console.log("tryMe", this.state.scores);
   return;
 } 
 
 resetScores(){
  saveStuff('unScores', this.state.zeroScoresForReset );
  console.log("reset scores");  
 }
 
 saveScoresToState(){
   getStuff('unScores').then((unScores)=>this.setState({ scores: unScores }));
   console.log("saved scores to state");   
 }
 
 resetAndSaveScores(){
   this.resetScores();
   this.saveScoresToState();
   console.log("reset and saved scores to state");
 }
 
 
  sortScores (scores) {
    const scoresToSort = JSON.parse(localStorage.getItem('unScores'));
    console.log("scores?", scoresToSort);
      let mySortedScores = Object.entries(scoresToSort)
        .sort((x,y) => y[1] - x[1]);
      console.log("sorted?", mySortedScores);
      saveStuff('sortedScores', mySortedScores);
      return mySortedScores;
  }
  
  saveSortedScoresToState(){
    getStuff('sortedScores').then((sortedScores)=>this.setState({ sortedScores : sortedScores }));
  }
  
  testFunction(){
    console.log("Eh", this.state.stateA);
  }



  render() {
  const { unList, unPick, considerLater, newPair, scores } = this.state;
  
    return (
      <div>
        <MatchUp unPick1={unPick[0]} unPick2={unPick[1]} score1={scores[unPick[0]]} score2={scores[unPick[1]]} handleChange={(e)=>this.bobPick(e, unList, unPick, considerLater, newPair, scores)} img1={imgBlob[unPick[0]]} img2={imgBlob[unPick[1]]} {...this.state}
          greeting="hello"
        />
        <Button handleClick={()=>this.resetAndSaveScores()} label="Reset Scores"/>
        <Button handleClick={(scores)=>this.sortScores()} label="Sort Scores" />
        <SortedGoal {...this.state} greeting="Hello again, hello" />        


      </div>
    );
  }
}

export default MatchUpContainer;

//this was working but not refreshing 
// <SortedGoal {...this.state} barf={this.state.sortedScores} />

//test of static sortedScore to image
// <SortedGoal src={imgBlob[sortedScores[0][0]]} alt={imgBlob[sortedScores[0][0]]} />


        // <div>
        //   {
        //     sortedScores.map(function(x, index){
        //       return (
        //         <SortedGoal key={ index } className="sortedGoal"
        //           src={imgBlob[sortedScores[x][0]]}
        //           alt={sortedScores[x][0]} {...this.state}
        //         />
        //       );
        //     })
        //   }
        // </div>

// <MatchUp>

//   <GoalCard
//     image={goal1.image}
//     title={goal1.title}
//     description={goal1.description}
//     onSelect={() => chooseWinner(goal1, goal2)}
//     onRemove={() => newMatchUp(goal1) }
//   />

//   <GoalCard
//     image={goal2.image}
//     title={goal2.title}
//     description={goal2.description}
//     onSelect={() => chooseWinner(goal2, goal1)}
//     onRemove={() => newMatchUp(goal2) }
//   />

// </MatchUp>

