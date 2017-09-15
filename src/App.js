import React from 'react';
import './App.css';
import Hello from './components/Hello';
import { getStuff } from './components/stuff';
import { PairMatch } from './components/Pair';
import Button from './components/Button';
import focusAreas from './components/unObject';
import { clickHandler } from './components/stuff';

class App extends React.Component {
  
state = {
  nameList: [],
  focusAreas
};

componentDidMount() {
  getStuff("nameList").then(nameList => this.setState({ nameList }));
}

render() {
  
const { nameList, focusAreas } = this.state;

    return ( focusAreas &&  (
      <div className="App">
        <Hello name={nameList[2]}/>
        <PairMatch/>
        <Button handleClick={()=>clickHandler('aList', focusAreas)} label="Anything in Here?"/>
        <Button handleClick={()=>clickHandler('Knowlton', focusAreas)} label="Another Button!"/>
      </div>)
    );
  }
}

export default App;
