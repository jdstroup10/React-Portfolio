import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
      const sections = [<ion-icon name="logo-facebook"></ion-icon>, <ion-icon name="logo-twitter"></ion-icon>, <ion-icon name="logo-instagram"></ion-icon>];
      const navLinks = sections.map(section => {
        return(
            <li><a href={'#' + section}>{section}</a></li>
            
        )
      });

    return (
        <footer>
          
      <h2 className="logo" >{this.props.LogoTitle} </h2>
      <ul>
      {navLinks}      

      
      
      </ul>
      
      </footer>
    );
  }
}

export default Footer;