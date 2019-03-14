import React from 'react';
import './Modal.css';
import { Consumer } from '../context/context';

const Modal = () => {
    return (
        <Consumer>
            {context => {
                return (
                    <div className="modal">
                        <div className="modal-main">
                            <h1>succesful order:</h1>
                            <p>Dear <span className="modal-element">{context.data.name}</span>, your order for a lovely <span className="modal-element">{context.data.option}</span> has been submited. 
                                A verification link will be sent to the email provided. You can track your order with your personal Order ID: 140-2765-{context.data.id}!</p>
                            <button onClick={context.actions.modalClose}>close</button>
                        </div>
                    </div>
                )
            }}            
        </Consumer>
    )
}

export default Modal;