import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { Card1, Card2, Card3,Card4,Card5 } from './components/Cards';
import "./App.css"
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Header />
          <Routes>
            <Route exact path="/" element={<Dashboard/>} />
            <Route path="/card1" element={<Card1/>} />
            <Route path="/card2" element={<Card2/>} />
            <Route path="/card3" element={<Card3/>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
