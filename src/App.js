import React from 'react';
import './App.css';
import { getStuff, saveStuff } from './components/stuff';
import Button from './components/Button';
import { getNewPick, getNewPick2 } from './components/pairSupport';
import GoalCard from './components/GoalCard';
import imgBlob from './components/imageExports';
import focusAreas from './components/unObject';
import MatchUpContainer from './components/MatchUpContainer';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.replaceConsiderLater2 = this.replaceConsiderLater2.bind(this);
    this.changeUnPick3 = this.changeUnPick3.bind(this);
    this.getStuffFromLocalStorageToState = this.getStuffFromLocalStorageToState.bind(this);
    this.checkSetUp = this.checkSetUp.bind(this);
    // this.scoreUnPick = this.scoreUnPick.bind(this);
      
    this.state = {
      localSetUp: ['considerLater', 'unPick', 'newPair', 'unScores'],
      unPick: [],
      img1: '',
      img2: '',
      focusAreas: {},
      considerLater: [],
      unList: Object.keys(focusAreas),
      newPair: []
    };
  }
  

changeUnPick3(unList, unPick, considerLater, newPair) {
  unPick = this.state.unPick;
  newPair = [];

  let i = 0;
  for ( i=0; i<2; i++) {
    getNewPick2(unList, unPick, considerLater, newPair);
  } console.log("newPair is now", newPair);

  this.setState({unPick: newPair});
  saveStuff('newPair', newPair);
  saveStuff('unPick', newPair);
  getStuff('focusAreasJSON').then(focusAreas => this.setState({focusAreas: focusAreas}));

} 

//move this to App, might have to be called inside handleChange=changeUnPick3
// scoreUnPick(e, unList, unPick, considerLater, newPair) {
//   const pickWinner = e;
//   console.log("a new Score for", pickWinner);
//   this.changeUnPick3(unList, unPick, considerLater, newPair);
// }




replaceConsiderLater2(x) {
  
  let considerLater = this.state.considerLater;
  console.log("starting pickCL, cl is", considerLater);
  // let considerLater = getStuff('considerLater');
  let indexOfClickedUnPick = this.state.unPick.indexOf(x);
  console.log("index is", indexOfClickedUnPick);
  let unPickObj = new Set(this.state.unPick); //convert array to Object
  unPickObj.delete(x);
  let unPickArray = [...unPickObj]; // convert object back to array
  let unList = this.state.unList;
  getNewPick(unList, unPickArray, considerLater); // did have this.state.considerLater as input; trying to get from localStorage as this.state is empty at this point.
  if (indexOfClickedUnPick===0) { 
    unPickArray.reverse(); 
    console.log("reversed is", unPickArray);
    this.setState({unPick: unPickArray});
    console.log("Hey! prevState?", this.state.unPick);
  } else {
    console.log("not reversed is", unPickArray);
    this.setState({unPick: unPickArray});
    saveStuff('unPick', unPickArray);
    saveStuff('newPair', unPickArray);
    // this.setState({unPick: unPickArray});
    return unPickArray;
  }
  console.log("new pair is", unPickArray);
  // this.setState((unPickArray)=>{return {unPick: unPickArray}});  /////GOT TO FIX THIS
  // this.setState({unPick: ["un99","un100"]});
  console.log("state of unPick is", this.state.unPick); // get prevState instead of new; but new state is set
  console.log("unPickArray is still", unPickArray);
  console.log("need to set state here somewhere maybe or maybe not...");

}

getStuffFromLocalStorageToState () {
  
  //TO DO: get this to work async (with promises or otherwise)
  
  // No promise but this actually works ****************
  let listFromLocal = JSON.parse(localStorage.getItem('considerLater'));
  console.log("listFromLocal is", listFromLocal);
  this.setState({considerLater: listFromLocal});
  
  // this gets pending promises, which do resolve after I need them
//   let arghPromise = getStuff('considerLater').catch(console.log("problem in arghPromise of getStuff in WillMount"));
//   let bobby = arghPromise;
//   console.log("arghP to bobby is", bobby);
//   this.setState({considerLater: bobby});
}

checkSetUp() {
  const { localSetUp } = this.state;
  localSetUp.map(function(x){
    let check = localStorage.getItem(x);
    if (!check) {
      console.log(x, "doesn't exist");
      saveStuff(x, []);
    } else {return x;}
    console.log("done checking");
    return x;
  });
  
}

componentWillMount() {
  let checkFocusAreas = localStorage.getItem('focusAreasJSON');
  if (!checkFocusAreas) {
    this.setState({ focusAreas });
    saveStuff('focusAreasJSON', focusAreas);
    } else { 
      getStuff('focusAreasJSON').then(focusAreas => this.setState({ focusAreas }));
    }
  this.checkSetUp();
  this.getStuffFromLocalStorageToState();
  this.changeUnPick3(this.state.unList, this.state.unPick, this.state.considerLater);  
}


componentDidMount() {
  console.log("state of cllist at didMount", this.state.considerLater);
  getStuff("nameList").then(nameList => this.setState({ nameList }));
  getStuff('unPick').then(unPick => this.setState({ unPick }));
  // getStuff('focusAreasJSON').then(focusAreas => this.setState({ focusAreas }));
  console.log("after mounting!...", this.state.unPick, this.state.considerLater);
  // this.changeUnPick3(this.state.unList, this.state.unPick, this.state.considerLater);
}

render() {
  
const { focusAreas, unPick, considerLater, unList } = this.state;
const img1 = focusAreas[unPick[0]];
const img2 = focusAreas[unPick[1]];

    return ( (null != img1 || null != img2 ) &&  (
      <div className="App">

        <GoalCard imgSource={imgBlob[img1.slug]} imgAlt={img1.label} handleChange={()=>this.changeUnPick3(this.state.unList, this.state.unPick, this.state.considerLater)} 
                  scores={focusAreas}
                  myPair={img2.slug}
                  jarJar={img1.slug}
                  key={img1.slug} 
                  value={img1.slug} laterList={considerLater} replaceConsiderLater={this.replaceConsiderLater2} />

        <GoalCard imgSource={imgBlob[img2.slug]} imgAlt={img2.label} handleChange={()=>this.changeUnPick3(this.state.unList, this.state.unPick, this.state.considerLater)}
                  scores={focusAreas}
                  myPair={img1.slug}
                  jarJar={img2.slug}
                  key={img2.slug} 
                  value={img2.slug} laterList={considerLater} replaceConsiderLater={this.replaceConsiderLater2} />

        <Button handleClick={()=>this.changeUnPick3(unList, unPick, considerLater)} label="Get Two"/>
        <Button handleClick={()=>console.log(this.state.unPick)} label="Get UnPick State Now"/>
        <Button handleClick={()=>console.log("clList in state is", considerLater)} label="Get considerLater from state"/>
        <Button handleClick={()=>console.log("scores anyone?", this.state.focusAreas[unPick[0]].slug, this.state.focusAreas[unPick[0]].score)} label="Get Scores" />
        <MatchUpContainer unPickProp={unPick} />

      </div>)
    );
  }
}

export default App;

//TODO:
//reset considerLater
//wrap Pair to try to get async working (load state before rendering)
//clean up css
//add a welcome screen (get their name maybe)
//add scoring
//show considerLater
//show topFive
//get Alert to be in App, not a pop-up