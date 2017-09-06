import React, { Component } from 'react';
import axios from 'axios';
import WhiteFrame from './components/WhiteFrame';
import TextField from './components/TextField';
import Button from './components/Button';
import LogoIcon from '../assets/logo.svg';

import './styles/index.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      isLoad: false,
      error: null,
    };
  }

  onSingIn() {
    const _ = this;
    this.setState({ isLoad: true, error: null });
    axios.post('http://localhost:3000/api/login', {
      "email": this.state.email,
      "password": this.state.pass,
    })
    .then(function (response) {
      alert("Login Successed");
      _.setState({ isLoad: false });
      // console.log(response);
    })
    .catch(function (error) {
      if (error.response.status >= 400) {
        _.setState({ error: error.response.data.msg });
      }
      _.setState({ isLoad: false });
      // console.log(error);
    });
  }

  render() {
    return (
      <WhiteFrame>
        <div className="box-logo">
          <img src={LogoIcon} className={this.state.isLoad ? 'logo-spin' : ''} />          
        </div>
        <div className="box-form">
          <TextField
            type="email"
            label="E-mail address"
            hintText="your email address"
            value={this.state.email}
            onChange={(value) => this.setState({ email: value })}
          />
          <TextField
            type="password"
            label="Password"
            hintText="your password"
            value={this.state.pass}
            onChange={(value) => this.setState({ pass: value })}
          />
          { this.state.error &&
            <p className="error">{this.state.error}</p>
          }
          <br />
          <div className="center">
            <Button
              onClick={() => this.onSingIn()}
            >SIGN IN</Button>
          </div>
          <br />
          <div className="box-flex">
            <a href="#">Forgot password</a>
            <a href="#">Create a new account</a>
          </div>
        </div>
      </WhiteFrame>
    );
  }
}

export default App;
