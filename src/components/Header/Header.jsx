import React from 'react';
import c from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header =(props)=> {
    return (
       <header className={c.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7zhd8Ix2QIUD8TdT-pHzXqDbo7iCP0pPlZuk7-M8H8MmUkGD4&usqp=CAU" alt="/" className="logo"/>
            <div className= {c.item} >
               out of society
            </div>
            <div className={c.loginBlock}>
                { props.isAuth ? <div className={c.itemBlock}><img alt={'#'} src={props.userPhoto}/>
                    <div>{props.email} <button onClick={props.logout}>Log out</button></div></div> : <NavLink to="/login">Login</NavLink> }
            </div>
       </header>
    );
};

export default Header;