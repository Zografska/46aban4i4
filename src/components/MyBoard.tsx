import React from 'react';

const MyBoard: React.FC = () => {
  return (
    <div className="profile-container glowy-outer" >
        <header className="profile-header">
            <h1>My Mood Board</h1>
            {/* <p>Architect 📏 | Artist 👩‍🎨 | Dreamer 💭</p> */}
        </header>
        <div className="profile-content">
            <div className="content-box glowy-outer">
            <iframe src='https://widgets.sociablekit.com/pinterest-board/iframe/228807' frameBorder='0' width='100%' height='1000'></iframe>
            </div>
            <div className="social-links">
                <h2>Connect with Me</h2>
                <a href="/horoscope"> Horoscope </a>
            </div>
        
        </div>
    </div>
  );
};

export default MyBoard;
