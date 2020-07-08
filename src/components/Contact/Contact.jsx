import React from 'react';
import c from './Contact.module.css';

const Contact =(props)=> {

    return (
        <div className={c.item}>
            <div>
                <div>{props.contact.fullName}</div>
                <div>{props.contact.phoneNumber}</div>
                <div>{props.contact.email}</div>
            </div>
        </div>
    )
}

export default Contact;