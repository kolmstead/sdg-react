import React from 'react';
import focusAreas from './unObject';
import MatchUp from './MatchUp';
import { joesThing, getStuff, saveStuff, getNewPickInMatch } from './stuff';
import imgBlob from './imageExports';
// import Button from './Button';

class MatchUpContainer extends React.Component {
  
  constructor (props) {
    super();
    this.tryMe = this.tryMe.bind(this);
    this.changeMatch = this.changeMatch.bind(this);
    
    this.state = {
      considerLater: JSON.parse(localStorage.getItem('considerLater')),
      newPair: JSON.parse(localStorage.getItem('newPair')),
      unList: Object.keys(focusAreas),
      scoredFA: JSON.parse(localStorage.getItem('focusAreasJSON')),
      scores: JSON.parse(localStorage.getItem('unScores')),
      unPick: JSON.parse(localStorage.getItem('unPick')),
      fred: "hey fred!",
    };
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
  
 tryMe(){
   console.log("tryMe", this.state.scores);
   joesThing();
   return;
 } 


  render() {
  const { scores, unList, unPick, considerLater } = this.state;
  // const { unPickProp } = this.props; //**no longer sending this from MiniApp replacing unPickProp code with unPick
  
    return (
      <div>
        <MatchUp unPick1={unPick[0]} unPick2={unPick[1]} score1={scores[unPick[0]]} score2={scores[unPick[1]]} handleChange={()=>this.changeMatch(unList, unPick, considerLater)} img1={imgBlob[unPick[0]]} img2={imgBlob[unPick[1]]} {...this.state}
        
        />
      </div>
    );
  }
}

export default MatchUpContainer;

//old code when getting 
        // <MatchUp unPick1={unPickProp[0]} unPick2={unPickProp[1]} score1={scores[unPickProp[0]]} score2={scores[unPickProp[1]]} handleChange={()=>this.changeMatch(unList, unPick, considerLater)} thePick={this.props.unPickProp} img1={imgBlob[unPickProp[0]]} img2={imgBlob[unPickProp[1]]} {...this.state}
        
        // />






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

