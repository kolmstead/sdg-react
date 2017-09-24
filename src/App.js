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
    this.replaceConsiderLater = this.replaceConsiderLater.bind(this);
      
    this.state = {
      nameList: [],
      unPick: [],
      img1: '',
      img2: '',
      focusAreas: {},
      considerLater: []
    };


    
  }
  
changeUnPick() {
  testMe();
  getStuff('unPick')
    .then(unPick=>this.setState({ unPick }));
}

replaceConsiderLater(x) {
  console.log("Wow!",x);
  let indexOfClickedUnPick = this.state.unPick.indexOf(x);
  console.log("index is", indexOfClickedUnPick);
  let unPickObj = new Set(this.state.unPick); //convert array to Object
  unPickObj.delete(x);
  console.log(unPickObj);
  let unPickArray = [...unPickObj]; // convert object back to array
  console.log(unPickArray);
  // need to make get one random function -- see pairSupport.js
  // will we need a lifecycle event to render to pick?
  
  
  
  // let slug = props[unPick[0]].slug;
  // considerLater.push(slug);
  // let indexOfClickedUnPick = unPick.indexOf(slug);
  // let unPickObj = new Set(unPick); //convert array to Object
  // unPickObj.delete(slug);
  // unPick = [...unPickObj]; // convert object back to array
  // let propsList = Object.keys(props);
  // pickRandom2([props,considerLater,propsList, unPick]);
  // unPick = unPick.reverse();
  // document.getElementById('p1imgBox').innerHTML = `<img id="p1img" src=${props[unPick[0]].image}>`;
  // document.getElementById('info1').innerHTML = `${props[unPick[0]].info}`;
  // document.getElementById('p1x').addEventListener('click', pickConsiderLater);
  // saveStuff('considerLater', considerLater)
  // showConsiderLaterList('considerLater');

}

componentWillMount() {  //consider an array with all that need to be checked then map to check and setup as needed MAYBE
  let checkFocusAreas = localStorage.getItem('focusAreasJSON');
  if (!checkFocusAreas) {
    this.setState({ focusAreas });
    saveStuff('focusAreasJSON', focusAreas);
    } else { 
      getStuff('focusAreasJSON').then(focusAreas => this.setState({ focusAreas }));
    } 
}


componentDidMount() {
  getStuff("nameList").then(nameList => this.setState({ nameList }));
  getStuff('unPick').then(unPick => this.setState({ unPick }));
  getStuff('considerLater').then(considerLater => this.setState({ considerLater }));
  this.changeUnPick();
}

render() {
  
const { nameList, focusAreas, unPick, considerLater } = this.state;
const img1 = focusAreas[unPick[0]];
const img2 = focusAreas[unPick[1]];

    return ( (null != img1 || null != img2) &&  (
      <div className="App">

        <Hello name={nameList[1]}/>

        <GoalCard imgSource={imgBlob[img1.slug]} imgAlt={img1.label} handleChange={this.changeUnPick} 
                  key={img1.slug} 
                  value={img1.slug} laterList={considerLater} replaceConsiderLater={this.replaceConsiderLater} />

        <GoalCard imgSource={imgBlob[img2.slug]} imgAlt={img2.label} handleChange={this.changeUnPick} 
                  key={img2.slug} 
                  value={img2.slug} laterList={considerLater} replaceConsiderLater={this.replaceConsiderLater} />

        <Button handleClick={this.changeUnPick} label="Get Two">{this.changeUnPick} </Button>
        <ParentInfo/>

      </div>)
    );
  }
}

export default App;

