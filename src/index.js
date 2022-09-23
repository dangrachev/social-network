import React from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/redux-store';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';


ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);
