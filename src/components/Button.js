import React from 'react';

var buttonStyle = {
  backgroundColor: 'red',
  padding: '15px'
};

class Button extends React.Component {

  render() {
    return (
     <button
       className="btn btn-default"
       style={buttonStyle}
       onClick={this.props.handleClick}>
        {this.props.label}
      </button>
   ); 
  }
}

export default Button;
