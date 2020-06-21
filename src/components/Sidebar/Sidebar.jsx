import React from 'react';
import  c from './Sidebar.module.css';
import Friends from './Friends/Friends';
import { NavLink } from 'react-router-dom';
//import MenuLink from './MenuLink/MenuLink';

console.log(c);

const Sidebar =(props)=> {
    let state = props.store.getState();
    let friendsElements = state.messagesPage.dialogsData.slice(0, 3).map(dialog  => <Friends name={dialog.name} id={dialog.id} ava={dialog.ava}/>);
    //let menuElements = props.state.sidebar.menuLink.map(menulink => <MenuLink link={menulink.link} path={menulink.id}/>);

    return (
       <div className={c.sidebar}>
           {/*{menuElements}*/}
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
                   <NavLink to="/users" activeClassName={c.activeLink}>Users</NavLink>
               </div>
               <div className={c.item}>
                   <NavLink to="/friends" activeClassName={c.activeLink}>Friends</NavLink>
               </div>
           </nav>
            <div className={c.blockfriend}>
               {friendsElements}
            </div>
       </div>
    );
};

export default Sidebar;