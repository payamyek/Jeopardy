import React from 'react';
import './App.css';
import GameBoard from '../GameBoard/GameBoard';
import Sound from 'react-sound';
import wiimusic from "../wiimusic.mp3"
import { Provider } from "react-redux"
import store from "../store"

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <GameBoard teams={["Zoomers", "Boomers"]}/>
          <Sound url={wiimusic} autoLoad={true} loop={true} volume={100} playStatus={Sound.status.PLAYING} />
        </div>
      </Provider>
  );
}

export default App;
