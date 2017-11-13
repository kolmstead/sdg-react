import React from 'react';
import axios from 'axios';
// import Button from './Button';

class Form extends React.Component {
  constructor(props){
    super();
    
    this.state = {
      title: '',
      text: ''
    };
    
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  
  

  onSubmit = (e) => {
    e.preventDefault();
    // get the form data out of state
    const { title, text } = this.state;
    console.log("title and text are:", title, text);
    
    axios.post('//r77-kolmstead.c9users.io:8081/api/notes2', { title: title, text: text })
      .then((result) => {
        console.log("did I post something?");
        console.log("the result is", result.data, result);
      });
      
    this.setState({title:'',text:''});
  }
  
  render() {
    const { title, text } = this.state;
    return (
    
      <div>
        <form className="myForm" onSubmit={this.onSubmit} >
          <fieldset>
            <legend>A Note</legend>
            <input type="text" name="title" value={title} placeholder="Note title" onChange={this.onChange} /><br/>
            <input type="text" name="text" value={text} placeholder="put a note here" onChange={this.onChange} />
            <button type="submit">Submit</button>
        
          </fieldset>
        </form>
      
      
      </div>
     );
  }
}

export default Form;

//old stateless function
// import React from 'react';
// import Button from './Button';

// const Form = (props) => (
//   <div>
//     <form className="myForm">
//       <fieldset>
//         <legend>A Note</legend>
//         <input type="text" placeholder="Note title" /><br/>
//         <input type="text" placeholder="put a note here" />
//         <Button onCick={props.something} label="Save Note" />
    
//       </fieldset>
//     </form>
  
  
//   </div>
  
// );

// export default Form;