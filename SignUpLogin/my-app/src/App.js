import React, { useState } from 'react';
import './App.css';

import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
const App = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup((prev) => !prev); // Toggle between true/false
  };
  return (
    <div className='App'>
         {isSignup ? (
        <Signup toggle={toggleForm} />
      ) : (
        <Login toggle={toggleForm} />
      )}
      </div>

  );
}

export default App;
