import React, { Component } from 'react';
import Form from '../forms/Form';
import './sign-up.scss';

import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export default class signUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confrimPassword: '',
  };

  handelSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confrimPassword } = this.state;

    if (password !== confrimPassword) {
      alert('password did not match');
      return;
    }

    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    try {
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confrimPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  handelChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confrimPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>I Don't Have an account</h2>
        <span>Sing up with an email and password</span>

        <form className='sign-up-form' onSubmit={this.handelSubmit}>
          <Form
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handelChange}
            lable='Diplay Name'
            required
          />
          <Form
            type='email'
            name='email'
            lable='Email'
            value={email}
            onChange={this.handelChange}
            required
          />
          <Form
            type='password'
            name='password'
            lable='Password'
            value={password}
            onChange={this.handelChange}
            required
          />
          <Form
            type='password'
            name='confrimPassword'
            value={confrimPassword}
            onChange={this.handelChange}
            lable='Confirm Password'
            required
          />

          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}
