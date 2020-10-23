import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/HomePage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignUp from './pages/authentication/sign-in-sign-up';
import { setCurrentUser } from './redux/user/user.action';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      const { setCurrentUser } = this.props;

      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });

          // this.setState({
          //   currentUser: {
          //     id: snapshot.id,
          //     ...snapshot.data(),
          //   },
          // });
        });
      }

      setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route
          exact
          path='/sign-in'
          render={() =>
            this.props.currentUser ? <Redirect to='/' /> : <SignInSignUp />
          }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
  };
};

export default connect(mapStateToProps, { setCurrentUser })(App);
