import React from 'react';
import c from './massageItem.module.css';


const MassageItem = (props) => {
    return (
        <div className={c.massage}>
            {props.massage}
        </div>
    )
}

export default MassageItem;