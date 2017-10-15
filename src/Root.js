import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import ParentInfo from './components/ParentInfo';
import Header from './components/Header';
import MiniApp from './components/MiniApp';


const Home = (props)=>{
  return (
    <div className="home">
      <p>There is a lot of stuff you should know.</p>
      <p>And a lot of stuff you should do.</p>
      <p>Get to know stuff and start doing stuff.</p>
    </div>
  );
};

const Root = () => (
  <Router>
    <div>
      <Header/>
      <Route exact path='/' component={Home}/>
      <Route path='/App' component={App} />
      <Route path='/Goals' component={ParentInfo}/>
      <Route path='/miniApp' component={MiniApp}/>
    </div>
  </Router>
);

export default Root;

