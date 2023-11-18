import React from 'react';
import Home from './components/Home';
import Horoscope from './components/Horoscope';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
        <div className="app-bar">
    <div className="logo">
        <a href="#">MyApp</a>
    </div>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/horoscope" Component={Horoscope} />
      </Routes>
    </Router>
  );
};

export default App;
