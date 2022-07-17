import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);