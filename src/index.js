import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import * as serviceWorker from './Services/serviceWorker';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';


ReactDOM.render(
    <React.StrictMode>
        <App/>
        <ToastContainer
            position="bottom-center"
            autoClose={4000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
