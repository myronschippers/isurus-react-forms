import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
    state = {
        heading: 'React State'
    };
    render() {
        return (
            <header className="header">
                <img src={logo} className="header-logo" alt="logo" />
                <h1 className="header-title">{this.state.heading}</h1>
            </header>
        );
    }
}

export default Header;
