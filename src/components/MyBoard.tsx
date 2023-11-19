/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const MyBoard: React.FC = () => {
  return (
    <div className="profile-container glowy-outer" >
        <header className="profile-header">
            <h1>My Mood Board</h1>
        </header>
        <div className="profile-content">
            <div className="content-box glowy-outer">
            <iframe src='https://widgets.sociablekit.com/pinterest-board/iframe/228807' frameBorder='0' width='100%' height='1000'></iframe>
            </div>
        </div>
    </div>
  );
};

export default MyBoard;
