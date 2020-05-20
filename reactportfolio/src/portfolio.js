import React, { Component } from 'react';
import './portfolio.css'

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <h3>Projects</h3>
                <h2>Here are some of my recent react projects!</h2>
                <div className="row">
                    <Icons Icon={iconObj[0].icon} title={iconObj[0].title} description={iconObj[0].description} Link={iconObj[0].link}/>
                    <Icons Icon={iconObj[1].icon} title={iconObj[1].title} description={iconObj[1].description} Link={iconObj[1].link}/>
                    <Icons Icon={iconObj[2].icon} title={iconObj[2].title} description={iconObj[2].description} Link={iconObj[2].link}/>
                    <Icons Icon={iconObj[3].icon} title={iconObj[3].title} description={iconObj[3].description} Link={iconObj[3].link}/>

                </div>
            </div>
        );

    }


};

const iconObj = [
    {
        icon: <ion-icon name="videocam"></ion-icon>,
        title: <a href="google.com">BingeWorthy</a>,
        description: 'Bingeworthy is an app that provides you a list of highly rated TV shows ',
        link: 'https://production-binge-worthy.herokuapp.com/'
    },
    {
        icon: <ion-icon name="bicycle"></ion-icon>,
        title: <a href="google.com">Workout Tracker</a>,
        description: 'Here is a workout tracker that lets you add and remove exercies',
        link: 'https://damp-waters-96726.herokuapp.com/'

    },
    {
        icon: <ion-icon name="logo-octocat"></ion-icon>,
        title: <a href="google.com">Cat Finder</a>,
        description: 'Check out our big cat finder. Find big cats in your area!',
        link: 'https://github.com/robertrcandler/BootCampProject1'

    },
    {
        icon: <ion-icon name="book"></ion-icon>,
        title: <a href="google.com">Quiz Game</a>,
        description: 'Test your knowledge with this quiz game I created',
        link: 'https://jdstroup10.github.io/Homework-4/'

    }
];

class Icons extends Component {
    render() {
        return (
            <div>
                <span>{this.props.Icon}</span>
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
                <p>{this.props.Link}</p>
            </div>
        );
    }
}

export default Portfolio;
