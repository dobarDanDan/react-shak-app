import React from 'react';
import SingleDrink from './SingleDrink.jsx';
import drink_inventory from '../../data/drink_inventory.json';
const stamp = console.log;

export default class DrinkMenu extends React.Component {
  render() {
    const renderDrinks = drink_inventory.map((drink, i) =>
      <SingleDrink key={i} id={drink.id} name={drink.name} price={drink.price} image={drink.image} addDrink={this.props.dodajPice} />
    )

    return (
      <div className={`drink-menu ${!this.props.otvoren && 'hide'}`}>
        {renderDrinks}
        {stamp(renderDrinks)}
      </div>
    )
  };
};

(function note() {
  // when I use old JS function console.log 
  // result is undefined.

  // when I use new arrow function 
  // console.log result is ok!
    const renderDrinks = drink_inventory.map(function(drink, i) {
      <SingleDrink key={i} id={drink.id} name={drink.name} price={drink.price} image={drink.image} />
    })

    return (
      <div>
        {console.log(renderDrinks)}
      </div>
    )
});


(function test() {
  console.log(drink_inventory)
  // console.log(drink_inventory.toString())
  console.log(typeof drink_inventory)
  console.log(drink_inventory.length)
});

(function test2() {
  var myStringArray = ["Hello","World"];
  var arrayLength = myStringArray.length;
  for (var i = 0; i < arrayLength; i++) {
  console.log(myStringArray[i]);
  }
});

(function test3() {
  var myStringArray = drink_inventory;
  var arrayLength = myStringArray.length;
  for (var i = 0; i < arrayLength; i++) {
  console.log(myStringArray[i]);
  }
});