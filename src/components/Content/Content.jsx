import React from 'react';
import c from './Content.module.css';
import Infoblock from './Infoblock/Infoblock';


const Content = () => {
    return (
        <div>
            <img className={c.img} src="https://www.goldmansachs.com/worldwide/banner-img-1200x200.jpg" alt="" />
            <Infoblock massage = "It's my first post!!!" massage2 = "I's cool!!!"/>
            <Infoblock massage = "How are you?" massage2 = "I love you baby!!!"/>
            <Infoblock massage = "I'm a black metallboy!!!" massage2 = "I love black metal music!!!"/>
        </div>
    );
}

export default Content;