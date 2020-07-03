import React from "react"
import GameBoard from './GameBoard';
import {Provider} from "react-redux";
import store from "../Redux/store";
import {Container} from "reactstrap";
import Particles from "react-particles-js";
import "../Styles/Particles.css"

function App() {
    return (
        <Provider store={store}>
            <Container fluid>
                <Particles style={{
                    position: 'fixed',
                    right: '0',
                    bottom: '0',
                    left: '0',
                    zIndex: '-1'
                }}
                params={{
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "speed": 4,
                            "size_min": 0.3
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "random": true,
                        "speed": 1,
                        "direction": "top",
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 250,
                            "duration": 2,
                            "size": 0,
                            "opacity": 0
                        },
                        "repulse": {
                            "distance": 400,
                            "duration": 4
                        }
                    }
                }
            }} />
                <GameBoard teams={["Zoomers", "Boomers"]}/>
            </Container>
        </Provider>
    );
}


export default App;