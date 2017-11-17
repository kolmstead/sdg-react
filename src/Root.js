import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import ParentInfo from './components/ParentInfo';
import Header from './components/Header';
import MiniApp from './components/MiniApp';
import { saveStuff, getStuff } from './components/stuff';
import QuoteForm from './components/QuoteForm';
import zeroScores from './components/zeroScores';
import initialState from './components/initialState';


const Home = (props)=>{
  return (
    <div className="home">
      <p>There is a lot of stuff you should know.</p>
      <p>And a lot of stuff you should do.</p>
      <p>Get to know stuff and start doing stuff.</p>
      <QuoteForm/>
    </div>
  );
};

class Root extends React.Component {
  
constructor(props) {
  super(props);
  
  this.state = {
    localSetUp: ['considerLater', 'unPick', 'newPair', 'sortedScores'],
    localSetUp2: ['considerLater', 'unPick', 'newPair', 'sortedScores', 'unScores', 'focusAreasJSON'],
    zeroScores: zeroScores,
    initialState: initialState,
    unPick: [],
    img1: '',
    img2: '',
    focusAreas: {},
    considerLater: [],
    unList: [],
    newPair: [],
    sortedScores: [["",""]],
    startStuff: {
      unScores: this.zeroScores,
      unPick:["un1", "un2"],
      newPair:["un1", "un2"],
      considerLater: [],
      sortedScores: [["un1", 0]]
    }
  };
  
}

checkLocal(){
  const { localSetUp2 } = this.state;
  
  localSetUp2.map(function(x) {
    return getStuff(x)
      .then(function(y) {if(!y){saveStuff(x, initialState[x]);} else {return x;}});
  });
}

componentWillMount(){
  this.checkLocal();
}



render() {
  
return (
  <Router>
    <div id="isThisIt">
      <Header />
      <Route exact path='/' component={Home}/>
      <Route path='/App' component={App} />
      <Route path='/Goals' component={ParentInfo}/>
      <Route path='/miniApp' component={MiniApp}/>
    </div>
  </Router>
  );
}
}

export default Root;