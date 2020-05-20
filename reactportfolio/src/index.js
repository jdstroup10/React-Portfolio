import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './navigation';
import Portfolio from './portfolio';
import Footer from './Footer'
import Header from './Header'
import * as serviceWorker from './serviceWorker';

class App extends Component {
  render() {
    return(
      <div>
      <Navigation LogoTitle="React Portfolio" />
      <Header title="UT Boot Camp Portfolio" button="Find Out More">
      </Header>
      <Portfolio></Portfolio>
      <Footer LogoTitle="Contact me: jdstroup10@gmail.com || 512-925-9287" />

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
