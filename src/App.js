import React from 'react';
import './App.css';
import Hello from './components/Hello';
import { getStuff, saveStuff } from './components/stuff';
import Button from './components/Button';
import { testMe } from './components/pairSupport';
import GoalCard from './components/GoalCard';
import imgBlob from './components/imageExports';
import focusAreas from './components/unObject';
import ParentInfo from './components/ParentInfo';


class App extends React.Component {
  
  constructor(props){
    super(props);
    this.changeUnPick = this.changeUnPick.bind(this);
      
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

componentWillMount() {
  // this.setState({ focusAreas });
  // console.log("Wow!", focusAreas);
  // saveStuff('bob', [1,2,3]);
  let joff = localStorage.getItem('focusAreasJSON');
  if (!joff) {
    this.setState({ focusAreas });
    saveStuff('focusAreasJSON', focusAreas);
    } else { 
      getStuff('focusAreasJSON').then(focusAreas => this.setState({ focusAreas }));
    } 
}


componentDidMount() {
  getStuff("nameList").then(nameList => this.setState({ nameList }));
  getStuff('unPick').then(unPick => this.setState({ unPick }));
  this.changeUnPick();
}



//props[unPick[0]].image

render() {
  
const { nameList, focusAreas, unPick } = this.state;
const img1 = focusAreas[unPick[0]];
const img2 = focusAreas[unPick[1]];

    return ( (null != img1 || null != img2) &&  (
      <div className="App">

        <Hello name={nameList[1]}/>

        <GoalCard imgSource={imgBlob[img1.slug]} imgAlt={img1.label} handleChange={this.changeUnPick} 
                  key={img1.slug} 
                  value={img1.slug} />

        <GoalCard imgSource={imgBlob[img2.slug]} imgAlt={img2.label} handleChange={this.changeUnPick} 
                  key={img2.slug} 
                  value={img2.slug} />

        <Button handleClick={this.changeUnPick} label="Get Two">{this.changeUnPick} </Button>
        <ParentInfo/>


      </div>)
    );
  }
}

export default App;

// A Buttons used to setup localStorage stuff

  // <Button handleClick={()=>clickHandler('aList', focusAreas)} label="Anything in Here?"/>

