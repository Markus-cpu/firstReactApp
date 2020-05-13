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

    let dialogsData = [
        {id: 1, name: 'Marat'},
        {id: 2, name: 'Victor'},
        {id: 3, name: 'Tanya'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Mark'},
        {id: 6, name: 'Leila'}
    ]

    let dialogElements =  dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesData = [
        {message: 'How are you?'},
        {message: 'What\'s up?'},
        {message: 'What do you think about me?'},
        {message: 'Who Am I?'},
        {message: 'You know me, my friend?'},
        {message: 'No, I\'m not!'}
    ]

    let messageElements = messagesData.map(massage => <MassageItem massage={massage.message}/>) 
    return (
        <div className={c.dialogs}>

            <div className={c.dialogsItems}>
                {dialogElements}
            </div>

            <div className={c.massagesItems}>
                {messageElements}
            </div>
        
        </div>
    )
}

export default Dialogs;