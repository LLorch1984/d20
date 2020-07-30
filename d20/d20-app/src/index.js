import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import  { HashRouter as Router} from 'react-router-dom'
import {context} from 'd20-client-logic'

const { REACT_APP_API_URL : API_URL} = process.env
console.log(API_URL)

context.API_URL = API_URL;





ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
