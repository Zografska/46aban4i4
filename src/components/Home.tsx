/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import Horoscope from './Horoscope';

const Home: React.FC = () => {
  return (
    <div className="profile-container glowy-outer" >
        <header className="profile-header">
            <h1>Eva Shabanova</h1>
            <p>Architect 📏 | Artist 👩‍🎨 | Dreamer 💭</p>
        </header>
        <div className="profile-content">
            <img src="https://scontent.fskp2-1.fna.fbcdn.net/v/t39.30808-6/316130438_1162303184702924_6056116119267912746_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lLuKBVkoiS0AX_siPUz&_nc_ht=scontent.fskp2-1.fna&oh=00_AfAZds3B2t66R8nruZhUULic7eNDELpC5-p7XdMl9-VcHg&oe=655DB46E"
            className="profile-picture"/>
            <div className="content-box">
                <h2>About Me</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="social-links">
                <h2 className='neon'>Connect with Me</h2>
                <Horoscope/>
            </div>
        
        </div>
    </div>
  );
};

export default Home;
