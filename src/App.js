import React from 'react';
import HomePage from './pages/HomePage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={Shop} />
    </div>
  );
}

export default App;
