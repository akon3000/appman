import React, { Component } from 'react';

import './styles.scss';

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  render() {
    return (
      <div className="component-text-field">
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(ev) => this.props.onChange(ev.target.value)}
          value={this.state.value}
          placeholder={this.props.hintText}
        />
      </div>
    );
  }
}

export default TextField;