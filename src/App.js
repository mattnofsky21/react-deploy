import React from 'react';
import profileImage from './img/lt.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>my react app</h1>
      <h2>author: matt</h2>
      <img src={profileImage} alt="profile image" />
    </div>
  );
}

export default App;
