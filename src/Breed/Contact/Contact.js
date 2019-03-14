import React from 'react';
import './Contact.css';
import { Consumer } from '../../context/context';

const Contact = () => {
    return (
        <Consumer>
            {context => {
                return (
                    <React.Fragment>
                        <form className="contact-form" onSubmit={context.actions.submit}>
                            <div className="contact-info">
                                <p>Name:</p>
                                <input type="text" name="name" value={context.data.name} onChange={context.actions.contactChange} required />
                            </div>

                            <div className="contact-info">
                                <p>Email:</p>
                                <input type="email" name="email" value={context.data.email} onChange={context.actions.contactChange} required/>
                            </div>

                            <div className="contact-info">
                                <p>Comment:</p>
                                <textarea name="comment" rows="3" value={context.data.comment} onChange={context.actions.contactChange} />
                            </div>

                            <button>{context.data.isLoading ? "Loading..." : "Submit"}</button>
                        </form>
                    </React.Fragment>
                )
            }}
        </Consumer>
    )
}

export default Contact;