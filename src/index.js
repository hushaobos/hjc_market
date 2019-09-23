import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home/Home';
import * as serviceWorker from './serviceWorker';
import {
  Router, 
  Route} from 'react-router-dom';
import * as h from 'history';

const browserHistory = h.createBrowserHistory();

ReactDOM.render(<Router history={browserHistory}>
  <Route path="/" name="根目录" component={Home} >
  </Route>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();