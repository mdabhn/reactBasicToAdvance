import React, { Component } from 'react';
import Form from '../forms/Form';
import './sign-in.scss';

import CustomButton from '../custom-button/custom-button';

export default class signIn extends Component {
  state = {
    email: '',
    password: '',
  };

  hadleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have and account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={this.hadleSubmit}>
          <Form
            type='email'
            name='email'
            id='email'
            lable='email'
            handleChange={this.handleChange}
            value={this.state.email}
          />

          <Form
            type='password'
            name='password'
            lable='password'
            id='password'
            handleChange={this.handleChange}
            value={this.state.password}
          />

          <CustomButton type='submit'>Submit</CustomButton>
        </form>
      </div>
    );
  }
}
