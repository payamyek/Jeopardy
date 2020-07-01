import React from "react"
import GameBoard from '../GameBoard';
import {Provider} from "react-redux";
import store from "../../Redux/store";
import {Container} from "reactstrap";

function App({settings}) {
    return (
        <Provider store={store}>
            <Container fluid>
                <GameBoard teams={["Zoomers", "Boomers"]}/>
            </Container>
        </Provider>
    );
}


export default App;