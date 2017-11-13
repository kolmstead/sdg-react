import React from 'react';
import axios from 'axios';

class QuoteForm extends React.Component {
  constructor(props){
    super();
    
    this.state = {
      name: '',
      quote: ''
    };
  }
  
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    // get the from data out of state
    const { name, quote } = this.state;
    axios.post('//r77-kolmstead.c9users.io:8081/api/quotes2', { name, quote })
      .then((result) => result);
      this.setState({ name: '', quote: ''});
  }
  
  render() {
    const { name, quote } = this.state;
    return (
      <form className="myForm" onSubmit={this.onSubmit} >
        <fieldset>
          <legend>Ode to a Quote</legend>
          <input type="text" name="name" value={name} placeholder="Quoter Name" onChange={this.onChange} /><br/>
          <input type="text" name="quote" value={quote} placeholder="Quote text" onChange={this.onChange} />
          <button type="submit">Submit Quote</button>
        </fieldset>
      </form>
      
    );
  }
}

export default QuoteForm;