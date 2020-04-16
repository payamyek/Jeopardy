import React from 'react';
import './App.css';
import GameBoard from './GameBoard';
import Sound from 'react-sound';
import wiimusic from "./wiimusic.mp3"

function App() {
  return (
    <div className="App">
      <GameBoard teams={["Zoomers", "Boomers"]}/>
      <Sound url={wiimusic} autoLoad={true} loop={true} volume={100} playStatus={Sound.status.PLAYING} />
    </div>
  );
}

export default App;
