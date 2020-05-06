import React from 'react';
import  c from './Sidebar.module.css';

console.log(c);

const Sidebar =()=> {
    return (
       <div className={c.sidebar}>
           <nav className={c.menu}>
               <div className={c.item}>
                  <a href="/home" className={c.link}>Home</a>
               </div>
               <div className={c.item}>
                  <a href="/content" className={`${c.link} ${c.active}`}>Content</a>
               </div>
               <div className={c.item}>
                  <a href="/contact" className={c.link}>Contact</a>
               </div>
               <div className={c.item}>
                  <a href="/dialogs" className={c.link}>Dialogs</a>
               </div>
               <div className={c.item}>
                  <a href="/email" className={c.link}>Email</a>
               </div>    
            </nav>
       </div>
    );
}

export default Sidebar;