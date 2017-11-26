import React from 'react';
const stamp = console.log;

const SingleDrink = function(props) {
  const handleClick = function () {
    props.addDrink(props.name, props.price)
  }

  return (
    <p className="drink" onClick={handleClick}>
      <img src={props.image}/>
      <span>{props.name}</span>
      <span>{props.price}</span>
    </p>
  );
};

export default SingleDrink