import React, { Component } from 'react';
import './Item.css'

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { textDecoration: '', checked: false };
  }

  handleLineThrough = () => {
    if (this.state.checked) {
      this.setState({ textDecoration: '', checked: false });
    } else {
      this.setState({ textDecoration: 'line-through', checked: true });
    }
  }

  render() {
    return (
      <div>
        <span id={`item-${ this.props.id }`} style={{ textDecoration: this.state.textDecoration }}>{ this.props.text }</span>
        <input id={`item-${ this.props.id }-checkbox`} type="checkbox" onChange={ this.handleLineThrough }></input>
      </div>
    )
  }
}

export default Item;
