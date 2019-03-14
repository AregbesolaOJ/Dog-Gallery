import React from 'react';
import './Works.css';

const Works = () => {
    return (
        <div className="works">
            <h1>how DogHouse.ng works</h1>
            <div className="works-contents">
                <div className="works-content">
                    <img src={require('../assets/1.png')} alt="logo" />
                    <p>Subscribe, starting at #22,000/box.</p>
                    <p>Monthly dog joy is just a click away. Valued at #10,499!</p>
                </div>
                <div className="works-content">
                    <img src={require('../assets/2.png')} alt="logo" />
                    <p>Your first Dog Box ships immediately.</p>
                    <p>FREE SHIPPING inside the contigous 36 states nationwide!</p>
                </div>
                <div className="works-content">
                    <img src={require('../assets/3.png')} alt="logo" />
                    <p>Your month-long dog party begins.</p>
                    <p>They'll never look at a cardboard box the same way again!</p>
                </div>
            </div>
            <div className="end">So, Get ready to spoil your dog with a Dog Box of their very own!!!</div>
        </div>
    )
}

export default Works;