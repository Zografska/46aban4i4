import React from 'react';
import Home from './components/Home';
import Horoscope from './components/Horoscope';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-bar glowy-outer">
        <div className="logo">
            <a href="#">MyGlamSite 😘</a>
        </div>
        <nav className="mobile-nav">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#glitter">Glitter</a></li>
                <li><a href="#sparkle">Sparkle</a></li>
                <li><a href="#fun">Fun</a></li>
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
