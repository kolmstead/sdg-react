import React from 'react';

const Quote = (props) => {
  return (
  <div key={props.id}>
  <h3>{props.name}</h3>
  <p>{props.quote}</p>
  </div>
  );
};

export default Quote;