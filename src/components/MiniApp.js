import React from 'react';
import MatchUpContainer from './MatchUpContainer';

class MiniApp extends React.Component {
  // constructor(props){
  //   super(props);
    
  //   this.state = {
  //     unPick: JSON.parse(localStorage.getItem('unPick')),
  //   };
  // }

//   render(){
    
//     const { unPick } = this.state;
    
//     return (
//       <MatchUpContainer unPickProp={unPick}/>
//     );
//   }
// }

  render(){
    return (
      <MatchUpContainer/>
    );
  }
}

export default MiniApp;