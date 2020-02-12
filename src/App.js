import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron/jumbotron';
import Users from './components/users';

function App() {
  return (
    <>
    <Jumbotron />
    <main className="container">
      <Users />
    </main>
    </>
  );
}

export default App;
