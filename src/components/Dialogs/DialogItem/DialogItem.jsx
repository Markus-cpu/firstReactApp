import React from 'react';
import c from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;
    return (
        <div className={c.dialog}>
            <NavLink to={path}><img className={c.ava} src={props.ava} /></NavLink>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;