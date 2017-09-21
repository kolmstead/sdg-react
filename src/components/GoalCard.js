import React from 'react';
import HighlightOff from 'material-ui-icons/HighlightOff';

class GoalCard extends React.Component {
  
  constructor(props){
    super(props);
    this.something = this.something.bind(this);
  } 
  
  something (e) {
    console.log("Add", e, "to considerLater list.");
  }

  
  render() {
    const { imgSource, imgAlt, value } = this.props;
    
    return (
       <div key>
         <img src={imgSource} alt={imgAlt} onClick={this.props.handleChange} />
         <HighlightOff onClick={()=>this.something(value)} value={value} />
       </div>
    );
  }
}

export default GoalCard;