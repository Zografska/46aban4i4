
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="profile-container" >
    <header className="profile-header">
        <h1>Eva Shabanova</h1>
        <p>Web Designer | Artist | Dreamer</p>
    </header>
    <div className="profile-content">
        <img src="https://scontent.fskp2-1.fna.fbcdn.net/v/t39.30808-6/316130438_1162303184702924_6056116119267912746_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lLuKBVkoiS0AX_siPUz&_nc_ht=scontent.fskp2-1.fna&oh=00_AfAZds3B2t66R8nruZhUULic7eNDELpC5-p7XdMl9-VcHg&oe=655DB46E"
         className="profile-picture"/>
        <div className="bio">
            <h2>About Me</h2>
            <p>Hello! I'm a creative web designer who loves art, music, and all things glittery. Welcome to my world!</p>
        </div>
        <div className="social-links">
            <h2>Connect with Me</h2>
            <a href="/horoscope"> Horoscope </a>
        </div>
       
    </div>
</div>
  );
};

export default Home;
