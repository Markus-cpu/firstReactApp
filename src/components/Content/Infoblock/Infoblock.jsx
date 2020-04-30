import React from 'react';
import c from './Infoblock.module.css';

const Infoblock = (props) => {
    return (
        <div>
            <div className={c.info_block} >
                <img className={c.avatar} src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/29/2901a6648beaa2944e51565cd2da5a8ba694c02c_full.jpg" alt="" />
                <div className={c.description}>Mr. Robot</div>
            </div >
                <div className={c.info_post}>
                   My life is impotant!!!
                <div>
                    <span className={c.date}>on Google 12.03.1982 Verdana</span>
                </div>
                <div className={c.new_post}>
                    New post
                </div>
                <div className={c.items}>
                    <div className={c.item}>
                        {props.massage}
                    </div>
                    <div className={c.item}>
                        {props.massage2}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infoblock;
