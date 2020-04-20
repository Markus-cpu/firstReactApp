import React from 'react';
import './Sidebar.module.css';


const Sidebar =()=> {
    return (
       <div className="sidebar">
           <nav className="menu">
               <div className="item">
                  <a href="#" className="link">Home</a>
               </div>
               <div className="item">
                  <a href="#" className="link">About</a>
               </div>
               <div className="item">
                  <a href="#" className="link">Contact</a>
               </div>
               <div className="item">
                  <a href="#" className="link">Massage</a>
               </div>
               <div className="item">
                  <a href="#" className="link">Email</a>
               </div>    
            </nav>
       </div>
    );
}

export default Sidebar;