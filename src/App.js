import React from 'react';
import './App.css';
import Hello from './components/Hello';
import { getStuff } from './components/stuff';
import Button from './components/Button';
import { testMe } from './components/pairSupport';
import GoalCard from './components/GoalCard';
import imgBlob from './components/imageExports';


class App extends React.Component {
  
  constructor(props){
    super(props);
    this.changeUnPick = this.changeUnPick.bind(this);
    this.pickConsiderLater = this.pickConsiderLater.bind(this);
      
    this.state = {
      nameList: [],
      unPick: [],
      img1: '',
      img2: '',
      focusAreas: {},
      considerLater: []
    };

    //handleChange(e) => some function


    
  }
  
changeUnPick() {
  testMe();
  getStuff('unPick')
    .then(unPick=>this.setState({ unPick }));
}

pickConsiderLater(e) {
  Promise.resolve(console.log("which?", this));
}
//***************need to figure out how to get props from GoalCard X that is clicked************

componentDidMount() {
  getStuff("nameList").then(nameList => this.setState({ nameList }));
  getStuff('unPick').then(unPick => this.setState({ unPick }));
  getStuff('focusAreasJSON').then(focusAreas => this.setState({ focusAreas }));
}



//props[unPick[0]].image

render() {
  
const { nameList, focusAreas, unPick } = this.state;
const img1 = focusAreas[unPick[0]];
const img2 = focusAreas[unPick[1]];
// const joey = img1.label;

    return ( (null != img1 || null != img2) &&  (
      <div className="App">

        <Hello name={nameList[1]}/>

        <GoalCard imgSource={imgBlob[img1.slug]} imgAlt={img1.label} handleChange={this.changeUnPick} handleClick={this.pickConsiderLater.bind(this, img1.slug)} clId={img1.slug}/>

        <GoalCard imgSource={imgBlob[img2.slug]} imgAlt={img2.label} handleChange={this.changeUnPick} handleClick={()=>console.log("Image2", img2.slug)} clId={img2.slug}/>

        <Button handleClick={this.changeUnPick} label="Get Two">{this.changeUnPick}</Button>

      </div>)
    );
  }
}

export default App;

// A Buttons used to setup localStorage stuff

  // <Button handleClick={()=>clickHandler('aList', focusAreas)} label="Anything in Here?"/>

