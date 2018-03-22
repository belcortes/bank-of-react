import React from 'react';

const Debits = (props) => {
  return (
    <div>
      <p>{props.description}</p>
      <p>{props.amount}</p>
      <p>{props.date}</p>
    </div>
  )
}

export default Debits;