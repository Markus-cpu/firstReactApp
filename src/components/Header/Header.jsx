import React from 'react';
import c from './Header.module.css';


const Header =()=> {
    return (
       <header className={c.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7zhd8Ix2QIUD8TdT-pHzXqDbo7iCP0pPlZuk7-M8H8MmUkGD4&usqp=CAU" alt="/" className="logo"/>
            <div className= {c.item} >
                fuck society
            </div>
       </header>
    );
}

export default Header;