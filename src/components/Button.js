import React from 'react';

const buttonStyle = {
  backgroundColor: '#3498db',
  width: '150px',
  height: '40px'
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
