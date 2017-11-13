import React from 'react';
import GoalInfoCard from './GoalInfoCard';
import focusAreas from './unObject';
import imgBlob from './imageExports';
import { getStuff } from './stuff';
import Form from './Form';

class ParentInfo extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      un2: Object.keys(focusAreas),
      focusAreas: focusAreas
    };
  }
  
  componentDidMount() {
    getStuff('focusAreasJSON').then(focusAreas=>this.setState({ focusAreas }));
  }  
  
  render() {
    const { un2, focusAreas } = this.state;

      return (
        <div id="listOfGoals">
        <Form />

            {un2.map(function(name, index){
                return (
                  <GoalInfoCard key={ index } className="goalInfoCard" score={focusAreas[name].score} >
                    <img src={imgBlob[name]} alt={name} className="imgInfo"/>
                    <h3>{focusAreas[name].label}</h3><div dangerouslySetInnerHTML={{__html: focusAreas[name].info}}></div>
                    <p>Score: {focusAreas[name].score} </p>
                  </GoalInfoCard>
            )})
            }
       
        </div>
      );
    }
  }

export default ParentInfo;