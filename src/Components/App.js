import React, {Suspense} from "react"
import {Provider} from "react-redux";
import store from "../Redux/store";
import {BrowserRouter as Router} from "react-router-dom";
import routes from "../Routes/Routes"

function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<span>Loading...</span>}>
                <Router>
                    <switch>
                        {routes}
                    </switch>
                </Router>
            </Suspense>
        </Provider>
    );
}


export default App;