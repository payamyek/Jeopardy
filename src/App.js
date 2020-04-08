import React from 'react';
import './App.css';
import GameBoard from './GameBoard';

function App() {
  return (
    <div className="App">
      <GameBoard categories={[ "Co-workers", "Tech", "Sports", "Math", "Animals"]} teams={["Zoomers", "Boomers"]}/>
    </div>
  );
}

export default App;
