import React from 'react';

const buttonStyle = {
  backgroundColor: '#7693c1',
  width: '150px',
  padding: '15px'
};

class Button extends React.Component {

  render() {
    return (
     <button
       className="btn btn-default"
       style={buttonStyle}
       onClick={this.props.handleClick} id={this.props.id}>
        {this.props.label}
      </button>
   ); 
  }
}

export default Button;
