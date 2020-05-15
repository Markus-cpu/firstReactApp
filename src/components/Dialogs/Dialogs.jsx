import React, {Component, PropTypes} from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MassageItem from './MassageItem/massageItem';


const Dialogs = (props) => {
    
    
    let dialogElements =  props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messageElements = props.state.messagesData.map(massage => <MassageItem massage={massage.message}/>);

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