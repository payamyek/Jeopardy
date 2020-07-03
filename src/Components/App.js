import React from "react"
import GameBoard from './GameBoard';
import {Provider} from "react-redux";
import store from "../Redux/store";
import {Container} from "reactstrap";
import SnowParticles from "../Components/SnowParticles";

function App() {
    return (
        <Provider store={store}>
            <Container fluid>
                <SnowParticles/>
                <GameBoard teams={["Zoomers", "Boomers"]}/>
            </Container>
        </Provider>
    );
}


export default App;