import React from 'react';
import  c from './Sidebar.module.css';
import Friends from './Friends/Friends';
import { NavLink } from 'react-router-dom';

console.log(c);

const Sidebar =(props)=> {
   
    let friendsElements =  props.state.dialogsData.slice(0, 3).map(dialog  => <Friends name={dialog.name} id={dialog.id} ava={dialog.ava}/>);
    
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
               <div className={c.item}>
                  <NavLink to="/Friends" activeClassName={c.activeLink}>Friends</NavLink>          
               </div>     
            </nav>
            {friendsElements}
       </div>
    );
}

export default Sidebar;