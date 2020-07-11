import React, {Suspense} from "react"
import {Provider} from "react-redux";
import store from "../Redux/store";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import routes from "../Routes/Routes"

function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<span>Loading...</span>}>
                <Router>
                    <Switch>
                        {routes}
                    </Switch>
                </Router>
            </Suspense>
        </Provider>
    );
}


export default App;