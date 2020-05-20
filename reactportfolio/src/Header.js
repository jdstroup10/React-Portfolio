import React, {Component} from 'react';
import './Header.css'
import Background from './img/orange_yellow_background_202072.jpg';

const myStyles = {
    'backgroundImage': `url(${Background})`,
    'height': '50vh',
    backgroundSize: 'cover'
}


class Header extends Component {
    render(){
        return (
            <header style={myStyles}>
                <h1>{this.props.title}</h1>
                <p>Jason Strouphauer</p>
        <a href="#button">{this.props.button}</a>
            </header>

        );

    }


};


export default Header;
