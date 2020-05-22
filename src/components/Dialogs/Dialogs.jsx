import React, {Component, PropTypes} from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MassageItem from './MassageItem/massageItem';

const Dialogs = (props) => {
    //Здесь обьявляется переменные, которым присваеваем значение
    //из файла state.js , через пропсы рендерим данные в компоненту
    //DialogItem, с помощью метода массива map каждому свойству создает отдельный массив,
    //при этом не изменяя основной массив 
    let dialogElements =  props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava}/>);
    let messageElements = props.state.messagesData.map(massage => <MassageItem massage={massage.message}/>);

    let newMessageElement = React.createRef();
    const addMessage =()=> {
        let text = newMessageElement.current.value;
        alert(text);
    }
    //здесь переменные вызываются
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <h2>Users</h2>
                {dialogElements} 
            </div>
            <div className={c.massagesItems}>
                <h2>Messages</h2>
                {messageElements}
                <div className={c.addText}>
                    <textarea className={c.textarea} ref={newMessageElement} name="message" rows="10" cols="40" placeholder='New message here......' ></textarea>
                    <button className={c.button} onClick={addMessage} >Send</button>
                </div>
            </div>
        </div>
    )
}

//экспортируем компоненту
export default Dialogs;