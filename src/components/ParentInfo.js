import React from 'react';
import GoalInfoCard from './GoalInfoCard';
import focusAreas from './unObject';
import imgBlob from './imageExports';

class ParentInfo extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      un2: Object.keys(focusAreas),
      focusAreas: focusAreas
    };
  }
  
  render() {
    const { un2, focusAreas } = this.state;
      return (
        <div>
            {un2.map(function(name, index){
                return (
                  <GoalInfoCard key={ index } className="goalInfoCard">
                    <img src={imgBlob[name]} alt={name} className="imgInfo"/>
                    <h3>{focusAreas[name].label}</h3><div dangerouslySetInnerHTML={{__html: focusAreas[name].info}}></div>
                  </GoalInfoCard>
            )})
            }
        </div>
      );
    }
  }

export default ParentInfo;