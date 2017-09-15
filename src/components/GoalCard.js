import React from 'react';

class GoalCard extends React.Component {
  
  render() {
    
    return (
       <div>






       
       </div>
    );
  }
}

// https://stackoverflow.com/questions/33840150/onclick-doesnt-render-new-react-component

// class NewComponent extends React.Component {
//   render() {
//     return (
//       <div {...this.props}>
//         new component
//       </div>
//     );
//   }  
// }

// class Button extends React.Component {
//   render() {
//     return (
//       <button {...this.props}>
//         click
//       </button>
//     );
//   }  
// }

// class App extends React.Component {
//   constructor() {
//     super();
    
//     this.state = {
//       clicked: false
//     };
    
//     this.handleClick = this.handleClick.bind(this);
//   }
  
//   handleClick() {
//     this.setState({
//       clicked: true
//     });
//   }
  
//   render() {
//     return (
//       <div>
//         <Button onClick={this.handleClick} />
//         {this.state.clicked ? <NewComponent /> : null}
//       </div>
//     );
//   }
// };

// React.render(
//   <App />,
//   document.getElementById("root")
// );









//   <GoalCard
//     image={goal1.image}
//     title={goal1.title}
//     description={goal1.description}
//     onSelect={() => chooseWinner(goal1, goal2)}
//     onRemove={() => newMatchUp(goal1) }
//   />