import React, { Component } from 'react';
import Item from './Item';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  addItem = () => {
    const item = document.getElementById('item-textbox').value;
    const newItems = this.state.items;
    newItems.push(item);
    this.setState( { items: newItems } );
  }

  render() {
    return (
      <div>
        <h1 id="heading">Shopping List</h1>
        <input id="item-textbox" type="text"></input>
        <button id="addItem-button" onClick={ this.addItem }>Add</button>
        { this.state.items.map((item, index) => <Item id={index} key={index} text={item} />) }
      </div>
    )
  }
}

export default ShoppingList;
