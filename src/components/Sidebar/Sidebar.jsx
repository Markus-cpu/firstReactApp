import React from 'react';
import  c from './Sidebar.module.css';

console.log(c);

const Sidebar =()=> {
    return (
       <div className={c.sidebar}>
           <nav className={c.menu}>
               <div className={c.item}>
                  <a href="#" className={c.link}>Home</a>
               </div>
               <div className={c.item}>
                  <a href="#" className={`${c.link} ${c.active}`}>About</a>
               </div>
               <div className={c.item}>
                  <a href="#" className={c.link}>Contact</a>
               </div>
               <div className={c.item}>
                  <a href="#" className={c.link}>Massage</a>
               </div>
               <div className={c.item}>
                  <a href="#" className={c.link}>Email</a>
               </div>    
            </nav>
       </div>
    );
}

export default Sidebar;