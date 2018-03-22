import React from 'react';

const Credits = (props) => {
  return (
      <div>
        <p>{props.description}</p>
        <p>{props.amount}</p>
        <p>{props.date}</p>
      </div>
  )
}

export default Credits;