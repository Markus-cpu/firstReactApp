import React from 'react';
import  c from './Friends.module.css';
import { NavLink } from 'react-router-dom';


const Friends =(props)=> {
    return (
        <div className={c.friendsitem}>
            <div className={c.item}>
                <img src='' />
                <div></div>
            </div>
            
        </div>
    )
}

export default Friends;