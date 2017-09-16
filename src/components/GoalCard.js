import React from 'react';
import HighlightOff from 'material-ui-icons/HighlightOff';

class GoalCard extends React.Component {
  
  // constructor(props){
  //   super(props);
  // } 

  
  render() {
    const { imgSource, imgAlt } = this.props;
    
    return (
       <div>
         <img src={imgSource} alt={imgAlt} onClick={this.props.handleChange} />
         <HighlightOff onClick={this.props.handleClick} />
         
       </div>
    );
  }
}

export default GoalCard;