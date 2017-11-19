import React from 'react';
import axios from 'axios';
import Quote from './Quote';
import Button from './Button';

class QuoteList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: [{"_id":'', "name":"Bob Niner", "quote":"Just wait!"}],
      quoter:'firstState',
      quote:'firstQuote',
      id: ''
    };
    
    this.loadQuotesFromServer = this.loadQuotesFromServer.bind(this);
  }
  
  loadQuotesFromServer(){
    axios.get(this.props.url)
      .then(res => {
        console.log("url is", this.props.url);
        console.log("res is", res);
        this.setState({ 
          data: res.data
        });
      });
  }
  
  clickForQuote(){
    console.log("quote!", this.state.data[2].quote);
    this.setState({quoter: this.state.data[2].name,
                   quote: this.state.data[2].quote
    });
  }

  componentDidMount(){
    this.loadQuotesFromServer();
  }
  
  render() {
    const { quoter, quote, data } = this.state;
    return ( data!==null && (
      <div>
        <Button label="quote list" handleClick={()=>this.clickForQuote()}/>      
        <Quote  name={quoter} quote={quote} />
        {data.map(function(i){
          return (
            <Quote key={i._id} name={i.name} quote={i.quote}/>
          );
        })
        }

      </div>)
    );
  }
}

export default QuoteList;

//<Quote name={data[6].name} quote={data[6].quote}/>