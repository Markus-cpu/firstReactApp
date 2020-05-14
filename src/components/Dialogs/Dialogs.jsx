import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MassageItem from './MassageItem/massageItem';


const Dialogs = (props) => {

    let dialogElements =  props.dialogsData.map(dialog => <DialogItem name={dialog.name}  id={dialog.id} />);
    let messageElements = props.messagesData.map(massage => <MassageItem massage={massage.message}/>);
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