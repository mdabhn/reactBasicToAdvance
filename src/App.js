import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import signInSignUp from './pages/authentication/sign-in-sign-up';

function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={Shop} />
      <Route exact path='/sign-in' component={signInSignUp} />
    </div>
  );
}

export default App;
