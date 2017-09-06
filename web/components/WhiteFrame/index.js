import React, { Component } from 'react';

import './styles.scss';

class WhiteFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="white-frame">
        { this.props.children }
      </div>
    )
  }
}

export default WhiteFrame;