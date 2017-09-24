import React from 'react';

class GoalInfoCard extends React.Component {
  
  render() {
    
    return (
    <div className="bobCard">
      {this.props.children}
    </div>
    );
  }
}

export default GoalInfoCard;






// import React from 'react';

// class GoalInfoCard extends React.Component {
  
//   constructor(props){
//     super(props);
//     this.something = this.something.bind(this);
//   } 
  
//   something (e) {
//     console.log("Add", e, "to considerLater list.");
//   }

  
//   render() {
//     const { imgSource, imgAlt, value } = this.props;
    
//     return (
//       <div key>
//         <img src={imgSource} alt={imgAlt} onClick={this.props.handleChange} />
//         <HighlightOff onClick={()=>this.something(value)} value={value} />
//       </div>
//     );
//   }
// }

// export default GoalCard;