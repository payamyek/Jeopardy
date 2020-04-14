import React from 'react';
import './App.css';
import GameBoard from './GameBoard';

function App() {
  return (
    <div className="App">
      <GameBoard teams={["Zoomers", "Boomers"]}/>
    </div>
  );
}

export default App;
