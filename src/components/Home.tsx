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
                <h2>Title: "Eva's Serene Journey: A Story of Friendship and Creativity"</h2>
                <h2>Chapter 1: A Passion for Elegance</h2>
                <p>Amidst the tranquil vibes of Skopje, Eva led a life of pure elegance. She, an architect with an eye for opulent designs that seamlessly blended with the city's charm, was a beacon of sophistication.</p>

                <h2>Chapter 2: Glamorous Childhood Bonds</h2>
                <p>Eva's closest confidante was none other than Zogsi, her partner in all things fabulous since childhood. Together, they reveled in the glitz of life, indulging in laughter-filled moments while watching videos, creating a friendship as sparkling as a diamond.</p>

                <h2>Chapter 3: The Artistic Diva</h2>
                <p>Eva's artistic flair was a masterpiece of grace. Her sketches, tranquil yet mesmerizing, painted a portrait of simple beauty. Each stroke of her pencil was like a brush dipped in glamour, bringing forth the allure of simplicity.</p>

                <h2>Chapter 4: Designing Dreams with Panache</h2>
                <p>Eva's architectural masterpieces were a symphony of creativity and luxury. Her designs graced Skopje with an air of sophistication, turning every building into a statement piece, making the city a stage for elegance.</p>

                <h2>Chapter 5: Friendship with a Touch of Class</h2>
                <p>Eva and Zogsi's friendship was a testament to their shared sense of grace. Their bond was a masterpiece of simplicity and joy, a harmonious blend of charm and tranquility that adorned their lives.</p>

                <h2>Epilogue: A Life of Timeless Glamour</h2>
                <p>Eva's autobiography celebrated a life of serene creativity and enduring friendship. Her story serves as a reminder that amid the everyday hustle and bustle, finding solace in elegance and treasuring genuine connections is the true recipe for a life of timeless glamour.</p>

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
