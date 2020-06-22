import React from 'react';
import './App.css';
import GameBoard from '../GameBoard/GameBoard';
import Sound from 'react-sound';
import wiimusic from "../../Assets/wiimusic.mp3"
import {Provider} from "react-redux"
import store from "../../Redux/store"
import {Container} from "reactstrap";

function App() {
    return (
        <Provider store={store}>
            <Container fluid>
                <GameBoard teams={["Zoomers", "Boomers"]}/>
                <Sound url={wiimusic} autoLoad={true} loop={true} volume={100} playStatus={Sound.status.PLAYING}/>
            </Container>
        </Provider>
    );
}

export default App;
