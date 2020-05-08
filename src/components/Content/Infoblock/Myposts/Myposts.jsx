import React from 'react';
import c from './Myposts.module.css';

const Myposts = (props) => {
    return (
        <div className={c.info_post}>
            <div className={c.new_post}>
                My post
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
    )
}

export default Myposts;
