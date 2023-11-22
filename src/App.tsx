import React from 'react';
import Home from './components/Home';
import Horoscope from './components/Horoscope';
import MyBoards from './components/MyBoard';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import SoundBoard from './components/SoundBoard';
import Music from './components/Music';
import { trailAnimation } from './cursor';
let trailArr = [1, .9, .8, .5, .25, .6, .4, .3, .2];

window.addEventListener('mousemove', function (e) {
  trailArr.forEach((i) => {trailAnimation(e, i)});

  let maxYTranslation = '80';
  trailArr.forEach((i) => {trailAnimation(e, i, maxYTranslation)});
}, false);

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-bar">
        <div className="logo">
            <a href="/">MyGlamSite 😘</a>
        </div>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/board">Mood ✨</a></li>
                <li><a href="/soundBoard">Drama 🎵</a></li>
                <li><a href="/music">Fun</a></li>
            </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/board" Component={MyBoards} />
        <Route path="/soundBoard" Component={SoundBoard} />
        <Route path="/horoscope" Component={Horoscope} />
        <Route path="/music" Component={Music} />
      </Routes>
      <footer className="app-bar">
        <div className="logo">
            <a href="/"> </a>
        </div>
        <nav>
            <ul>
                <div className='logo'> <a href="https://www.youtube.com/watch?v=tXuewJ5CDgw">XOXO 💋</a></div>
            </ul>
        </nav>
      </footer>
    </Router>
  );
};

export default App;
