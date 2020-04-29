import React from 'react';
import './App.css';
import GameBoard from '../GameBoard/GameBoard';
import Sound from 'react-sound';
import wiimusic from "../../Resources/wiimusic.mp3"
import { Provider } from "react-redux"
import store from "../../Redux/store"

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <GameBoard teams={["Copras", "Penguins"]}/>
          <Sound url={wiimusic} autoLoad={true} loop={true} volume={100} playStatus={Sound.status.PLAYING} />
        </div>
      </Provider>
  );
}

export default App;
