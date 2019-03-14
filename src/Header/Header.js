import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={require('../assets/logo.JPG')} alt="logo" />
                <div className="header-logo-content">
                    <h1>DogHouse.ng</h1>
                    <p>...the home of dogs!</p>
                </div>
            </div>
            <div className="header-options">
                <p>Login</p>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Header;