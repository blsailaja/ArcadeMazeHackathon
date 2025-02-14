import React from 'react';
import gamespg from "../assets/gamespg.mp4";

const GameRedirector = () => {
  const games = [
    { name: 'Nine Men Morris', link: '/games/ninemenmorris' },
    { name: 'Space Shooter', link: '/games/spaceshooter' },
    { name: 'LexiQuest', link: '/games/lexiquest' },
  ];

  return (
    <div style={styles.container}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        style={styles.video}
      >
        <source src={gamespg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content overlay */}
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Welcome to the Infinity Arcade</h1>
        <p style={styles.description}>Choose a game to play and have fun!</p>
        <div style={styles.buttonContainer}>
          {games.map((game, index) => (
            <button
              key={index}
              style={styles.button}
              onClick={() => (window.location.href = game.link)}
            >
              {game.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1, // Ensure video is behind the content
  },
  overlay: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: 'white',
    textAlign: 'center',
    zIndex: 1,
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#61dafb',
    color: '#282c34',
    cursor: 'pointer',
    transition: 'transform 0.2s, background-color 0.2s',
  },
};

// Handle hover effect dynamically
const buttonHoverStyle = document.createElement('style');
buttonHoverStyle.innerHTML = `
  button:hover {
    background-color: #21a1f1;
    transform: scale(1.05);
  }
`;
document.head.appendChild(buttonHoverStyle);

export default GameRedirector;
