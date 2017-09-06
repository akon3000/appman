import React, { Component } from 'react';

import './styles.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button
        onClick={() => this.props.onClick()}
        className="component-button"
      >
        { this.props.children }
      </button>
    );
  }
}

export default Button;