import React from 'react';
import GoalInfoCard from './GoalInfoCard';
import focusAreas from './unObject';
import imgBlob from './imageExports';

class ParentInfo extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      unList: ["bob", "freddy", "zoey"],
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
                  <GoalInfoCard key={ index }>
                    <img src={imgBlob[name]} alt={name} className="imgInfo"/>
                    {name}{focusAreas[name].label}
                  </GoalInfoCard>
            )})
            }
        </div>
      );
    }
  }

export default ParentInfo;