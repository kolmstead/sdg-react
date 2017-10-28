import React from 'react';
import focusAreas from './unObject';
import MatchUp from './MatchUp';
import { getStuff, saveStuff, getNewPickInMatch } from './stuff';
import imgBlob from './imageExports';
import Button from './Button';
import zeroScores from './zeroScores';
import SortedGoal from './SortedGoal';
import SimpleShow from './SimpleShow';

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
  
  pickForLater(e){
    const pick = e.target.id;
    console.log(pick);
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
      <div>
        <MatchUp unPick1={unPick[0]} unPick2={unPick[1]} score1={scores[unPick[0]]} score2={scores[unPick[1]]} handleChange={(e)=>this.pickWinner(e, unList, unPick, considerLater, newPair, scores)} img1={imgBlob[unPick[0]]} img2={imgBlob[unPick[1]]} {...this.state}
          greeting="hello"
          pickForLater={(e)=>this.pickForLater(e)}
          showPickInfo={(e)=>this.showPickInfo(e)}
        />
        <Button handleClick={()=>this.resetAndSaveScores()} label="Reset Scores"/>
        <Button handleClick={(scores)=>this.sortScores()} label="Sort Scores" />
        <SortedGoal {...this.state} />  
        {!this.state.isHidden && <SimpleShow  stuff={this.state.scoredFA[unPick[0]].label}/>}


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

