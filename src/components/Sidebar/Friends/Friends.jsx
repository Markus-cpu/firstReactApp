import React from 'react';
import  c from './Friends.module.css';
// import { NavLink } from 'react-router-dom';


const Friends =(props)=> {
    return (
        <div className={c.friendsitem}>

            {/*<NavLink to='/friends/' className={c.block}>Friends</NavLink>*/}
            <div className={c.item}>
                <div className={c.blockinfo}>
                    <img className={c.ava} src={props.ava} />
                    <div className={c.name}>{props.name}</div>
                </div>
            </div> 
        </div>
    )
}

export default Friends;