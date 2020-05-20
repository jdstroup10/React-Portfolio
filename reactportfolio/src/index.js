import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './navigation';
import Header from './Header'
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import * as serviceWorker from './serviceWorker';

class App extends Component {
  render() {
    return(
      <div>
      <Navigation LogoTitle="React Portfolio" />
      <Header title="UT Boot Camp Portfolio">
        
      </Header>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
