import React from 'react';
import c from './Content.module.css';
import InfoblockContainer from "./Infoblock/InfoblockContainer";

const Content = (props) => {
    return (
        <div>
            <img className={c.img} src="https://www.goldmansachs.com/worldwide/banner-img-1200x200.jpg" alt="" />
            <InfoblockContainer />
        </div>
    );
};

export default Content;