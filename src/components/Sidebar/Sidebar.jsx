import React from 'react';
import  c from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

console.log(c);

const Sidebar =()=> {

    return (
       <div className={c.sidebar}>
           <nav className={c.menu}>
               <div className={c.item}>
                  <NavLink to="/home" activeClassName={c.activeLink}>Home</NavLink>    
               </div>
               <div className={c.item}>
                  <NavLink to="/content" activeClassName={c.activeLink}>Content</NavLink>       
               </div>
               <div className={c.item}>
                  <NavLink to="/contact" activeClassName={c.activeLink}>Contact</NavLink>            
               </div>
               <div className={c.item}>
                  <NavLink to="/dialogs" activeClassName={c.activeLink}>Dialogs</NavLink>           
               </div>
               <div className={c.item}>
                  <NavLink to="/email" activeClassName={c.activeLink}>Email</NavLink>          
               </div>    
            </nav>
       </div>
    );
}

export default Sidebar;