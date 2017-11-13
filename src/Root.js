import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import ParentInfo from './components/ParentInfo';
import Header from './components/Header';
import MiniApp from './components/MiniApp';
import { saveStuff } from './components/stuff';
import QuoteForm from './components/QuoteForm';


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
    localSetUp: ['considerLater', 'unPick', 'newPair', 'unScores', 'sortedScores'],
    unPick: [],
    img1: '',
    img2: '',
    focusAreas: {},
    considerLater: [],
    unList: [],
    newPair: [],
    sortedScores: [["",""]],
  };
}

checkSetUp() { //maybe a case:switch or what other strategy for setup?
  const { localSetUp } = this.state;
  localSetUp.map(function(x){
    let check = localStorage.getItem(x);
    if (!check) {
      console.log(x, "doesn't exist");
      saveStuff(x, []);
    } else {return x;}
    console.log("done checking", x);
    return x;
  });
  
}

componentWillMount(){
  console.log("4321");
  this.checkSetUp();
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


// Copy of working component before rewriting as a Class Component with state
// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import App from './App';
// import ParentInfo from './components/ParentInfo';
// import Header from './components/Header';
// import MiniApp from './components/MiniApp';


// const Home = (props)=>{
//   return (
//     <div className="home">
//       <p>There is a lot of stuff you should know.</p>
//       <p>And a lot of stuff you should do.</p>
//       <p>Get to know stuff and start doing stuff.</p>
//     </div>
//   );
// };

// const Root = () => (
//   <Router>
//     <div id="isThisIt">
//       <Header />
//       <Route exact path='/' component={Home}/>
//       <Route path='/App' component={App} />
//       <Route path='/Goals' component={ParentInfo}/>
//       <Route path='/miniApp' component={MiniApp}/>
//     </div>
//   </Router>
// );

// export default Root;

