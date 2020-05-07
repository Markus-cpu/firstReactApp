import React from 'react';
import c from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/1">Marat</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/2">Victor</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/3">Tanya</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/4">Sveta</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/5">Mark</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/6">Leila</NavLink>
                </div>
            </div>

            <div className={c.massagesItems}>
                <div className={c.massage}>
                    How are you?
                </div>
                <div className={c.massage}>
                    What's up?
                </div>
                <div className={c.massage}>
                    What do you think about me?
                </div>
                <div className={c.massage}>
                   Who Am I?
                </div>
                <div className={c.massage}>
                   You know me, my friend?
                </div>
                <div className={c.massage}>
                   No, I'm not!
                </div>
            </div>
        </div>
    )
}

export default Dialogs;