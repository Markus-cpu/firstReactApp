import React from 'react';
import c from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;
    return (
        <div className={c.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MassageItem = (props) => {
    return (
        <div className={c.massage}>
            {props.massage}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>

            <div className={c.dialogsItems}>
                <DialogItem name="Marat" id="1" />
                <DialogItem name="Victor" id="2" />
                <DialogItem name="Tanya" id="3" />
                <DialogItem name="Sveta" id="4" />
                <DialogItem name="Mark" id="5" />
                <DialogItem name="Leila" id="6" />
            </div>

            <div className={c.massagesItems}>
                <MassageItem massage="How are you?"/>
                <MassageItem massage="What's up?"/>
                <MassageItem massage="What do you think about me?"/>
                <MassageItem massage="Who Am I?"/>
                <MassageItem massage="You know me, my friend?"/>
                <MassageItem massage="No, I'm not!"/>
            </div>
            
        </div>
    )
}

export default Dialogs;