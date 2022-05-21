import React, { Component } from 'react';

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
        <input id={`item-${ this.props.id }-checkbox`} type="checkbox" onChange={ this.handleLineThrough }></input>
        <span id={`item-${ this.props.id }`} style={{ textDecoration: this.state.textDecoration }}>{ this.props.text }</span>
      </div>
    )
  }
}

export default Item;
