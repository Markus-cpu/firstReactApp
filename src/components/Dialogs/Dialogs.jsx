import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MassageItem from './MassageItem/massageItem';




const Dialogs = (props) => {
    //Здесь обьявляется переменные, которым присваеваем значение
    //из файла store.js , через пропсы рендерим данные в компоненту
    //DialogItem, с помощью метода массива map каждому свойству создает отдельный массив,
    //при этом не изменяя основной массив 
    let dialogElements =  props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava}/>);
    let messageElements = props.messagesData.map(massage => <MassageItem massage={massage.message}/>);

    let newMessageElement = props.newMessages;

    let onAddMessage =()=> {//обработчик события
        props.addMessage();
    };

    let onMessageChange =(e)=> {//определяем обработчик события
        let text = e.target.value;
        props.updateNewMessage(text);
    };

    //здесь переменные вызываются
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <h2 className={c.title}>Users</h2>
                {dialogElements} 
            </div>
            <div className={c.massagesItems}>
                <h2 className={c.title}>Messages</h2>
                {messageElements}
                <div className={c.addText}>
                    <textarea onChange={onMessageChange} value={newMessageElement} className={c.textarea}
                              //значение(value) textarea зависит от того, что сидит в store.js
                              // onChange срабатывает всякий раз, когда идет попытка изменить поле textarea
                              //name="message" rows="10" cols="40"
                              placeholder='New message here......' >
                    </textarea>
                    <button className={c.button} onClick={onAddMessage}>Send</button>
                </div>
            </div>
        </div>
    )
};

//экспортируем компоненту
export default Dialogs;
