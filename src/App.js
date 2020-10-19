import React from 'react';
import HomePage from './pages/HomePage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
    </div>
  );
}

export default App;
