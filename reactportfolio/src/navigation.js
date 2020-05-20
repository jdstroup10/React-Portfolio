import React, {Component} from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './navigation.css';

class Navigation extends Component {
  render() {
      const sections = ['Home', 'Projects', 'Contact'];
      const navLinks = sections.map(section => {
        return(
            <li><a href={'#' + section}>{section}</a></li>
            
        )
      });

    return (
        <nav>
          
      <h2 className="logo" >{this.props.LogoTitle} </h2>
      <ul>
      {navLinks}      

      
      
      </ul>
      
      </nav>
    );
  }
}

export default Navigation;