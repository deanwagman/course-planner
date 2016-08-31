import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { text: props.text };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let newName = prompt("Rename calendar to:");
    if (newName.length) {
      this.setState({ "text": newName });
    }
  }

  render() {
    return (
      <h1 onClick={ this.handleClick }>{ this.state.text }</h1>
    );
  }
}

export default Header;
