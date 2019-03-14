import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-option">
                    <h1>get started</h1>
                    <p>get a dog box</p>
                    <p>give a dog box</p>
                    <p>claim a gift</p>
                </div>
                <div className="footer-top-option">
                   <h1>about us</h1>
                    <p>our story</p>
                    <p>careers</p>
                    <p>contact us</p>
                    FAQs                    
                </div>
            </div>
            <div className="rights"> &copy; 2018 DogHouse.ng All Rights Reserved.</div>
            <div className="footer-end">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
        </div>

    )
}

export default Footer;