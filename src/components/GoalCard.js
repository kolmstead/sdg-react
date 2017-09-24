import React from 'react';
import HighlightOff from 'material-ui-icons/HighlightOff';
import { saveStuff } from './stuff';

class GoalCard extends React.Component {
  
  constructor(props){
    super(props);
    this.handleConsiderLater = this.handleConsiderLater.bind(this);

  } 
  
  handleConsiderLater (e) {
    const pickConsiderLater = e;
    let considerLaterList = this.props.laterList;
    considerLaterList.push(pickConsiderLater);
    saveStuff('considerLater', considerLaterList);
    this.props.replaceConsiderLater(e);
  }

  
  render() {
    const { imgSource, imgAlt, value } = this.props;
    
    return (
       <div key>
         <img src={imgSource} alt={imgAlt} onClick={this.props.handleChange} />
         <HighlightOff onClick={()=>this.handleConsiderLater(value)} value={value} />
       </div>
    );
  }
}

export default GoalCard;