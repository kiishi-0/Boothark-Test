import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Nav} from './Components/Nav'
import {BidPage} from './Pages/BidPage'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <BidPage></BidPage>
    </div>
  );
}

export default App;
