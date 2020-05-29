import React from 'react';
import c from './Myposts.module.css';

const Myposts = (props) => {
    return (
        <div className={c.info_post}>
            <div className={c.new_post}>
                <img className={c.avaName} src="https://vrgames.by/sites/default/files/pictures/picture-164663-1516479456.jpg" />
               !!!!!!!My post!!!!!!!
                </div>
            <div className={c.items}>
                <div className={c.item}>
                    {props.massage}
                </div>
            </div>
        </div>
    )
}

export default Myposts;
