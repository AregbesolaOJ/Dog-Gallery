import React from 'react';
import './Order.css';
import { Consumer } from '../context/context';

const Order = () => {
    return (
        <Consumer>
            {context => {
                return (
                    <div className="Order">
                        <div className="order-image">
                            <img src={require('../assets/dogs.jpg')} alt="" />
                        </div>
                        <div className="order-content">
                            <h1>we believe you need a best friend</h1>
                            <div className="order-content-statement">
                                <p>The domestic dog is the most widely abundant terrestrial carnivore. 
                                    Their long association with humans has led dogs to be uniquely attuned to human behavior and they are able to thrive on a starch-rich diet that would be inadequate for other canid species. Dogs vary widely in shape, size and colors. 
                                    They perform many roles for humans, such as hunting, herding, pulling loads, protection, assisting police and military, companionship and, more recently, aiding disabled people and therapeutic roles. This influence on human society has given them the sobriquet of "man's best friend". 
                                    At Dog-House.ng, you're just a click away from our various selection of dog breeds available to be your new best friend!!!    
                                </p>
                                <button onClick={context.actions.orderClick}>Make an Order</button>
                            </div>
                        </div>
                    </div>
                )
            }}
        </Consumer>
    )
}

export default Order;