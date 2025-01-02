import React from 'react';
import './GameDetails.css';

const GameDetails = ({ game }) => {
  // YouTube video URL with autoplay parameter set to 1
  const videoUrl = "https://www.youtube.com/embed/YuePFYmplm0?autoplay=1&loop=1&mute=1"; // Adjust the URL with the autoplay parameter

  return (
    <div className='gameDetails_container'>
        <div className="gameDetails_twoSection">
            <div className="gameDetails_leftSection">
                <iframe
                  src={videoUrl}
                  title="Game Video"
                  width="100%"   // Ensure this fits the container
                  height="100%"  // Ensure this fits the container
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
            </div>
            <div className="gameDetails_rightSection">
              {/* Additional game details can go here */}
            </div>
        </div>
      {/* <h2>{game}</h2> */}
      <div className="gameDetails_description">
        <h3>Betting Section</h3>
      </div>
    </div>
  );
};

export default GameDetails;
