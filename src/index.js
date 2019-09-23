import React, { PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './home/Home';
import * as serviceWorker from './serviceWorker';
import {routeConfig} from './config/router.config';
import {
  BrowserRouter,
  Router, 
  Route,
  Switch} from 'react-router-dom';
import * as h from 'history';


// ReactDOM.render(<Home/>, document.getElementById('root'));

class About extends PureComponent{
  
  render() {
    return(
      <div>
        About
      </div>
   )
  }
}


class Inbox extends PureComponent{
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
}

class Message extends PureComponent{
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
}

const browserHistory = h.createBrowserHistory();

ReactDOM.render(<Router history={browserHistory}>
  <Route path="/" name="根目录" component={Home} >
  </Route>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();