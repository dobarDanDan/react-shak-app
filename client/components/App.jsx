import React from 'react';
import Header from './Header/Header.jsx';
import TableWrapper from './TableWrapper/TableWrapper.jsx';
import DrinkMenu from './DrinkMenu/DrinkMenu.jsx';
const stamp = console.log;

export default class App extends React.Component {
  render() {
    return (
     <div>
        <Header />
        <DrinkMenu />
      </div>
    );
  }
}
 
// https://stackoverflow.com/questions/41604539/objects-are-not-valid-as-a-react-child
