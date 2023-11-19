
import React from 'react';


const Music: React.FC = () => {
  return (
    <div className="profile-container glowy-outer" >
        <header className="profile-header">
            <h1>My taste in music</h1>
            <p>Music for all the moods...</p>
        </header>
        <div className="profile-content">

                <div id="embed-iframe"></div>
                <iframe className='spotify-playlist' src="https://open.spotify.com/embed/playlist/0gJQJjHw7z9H5WX90Fwb1Q?utm_source=generator" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe className='spotify-playlist' src="https://open.spotify.com/embed/playlist/5kkQAVYCHFnMI7ZI9eWrzx?utm_source=generator" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe className='spotify-playlist' src="https://open.spotify.com/embed/playlist/7DxYQtS3JYXNyTHo5Fl0ip?utm_source=generator" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe className='spotify-playlist' src="https://open.spotify.com/embed/playlist/4S1vEiqZhxYfEx7hTju8Ad?utm_source=generator&theme=0" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
   
    </div>
  );
};

export default Music;
