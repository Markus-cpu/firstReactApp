import React from 'react';
import c from './Content.module.css';
import Infoblock from './Infoblock/Infoblock';


const Content = () => {
    return (
        <div>
            <img className={c.img} src="https://www.goldmansachs.com/worldwide/banner-img-1200x200.jpg" alt="" />
            <Infoblock />
            
        </div>
    );
}

export default Content;