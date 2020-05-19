import React, {Component} from 'react';

import Background from './img/orange_yellow_background_202072.jpg';

const myStyles = {
    'backgroundImage': `url(${Background})`,
    'height': '80vh',
    backgroundSize: 'cover'
}


class Header extends Component {
    render(){
        return (
            <header style={myStyles}>

            </header>

        );

    }


};


export default Header;
