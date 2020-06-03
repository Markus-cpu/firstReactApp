import React, {Component, PropTypes} from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MassageItem from './MassageItem/massageItem';

const Dialogs = (props) => {
    //Здесь обьявляется переменные, которым присваеваем значение
    //из файла state.js , через пропсы рендерим данные в компоненту
    //DialogItem, с помощью метода массива map каждому свойству создает отдельный массив,
    //при этом не изменяя основной массив 
    let dialogElements =  props.messagesPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava}/>);
    let messageElements = props.messagesPage.messagesData.map(massage => <MassageItem massage={massage.message}/>);

    let newMessageElement = React.createRef();

    const addMessage =()=> {//обработчик события
        let action = {type: 'ADD-MESSAGE'};
        props.dispatch(action);
    };

    let onMessageChange =()=> {//определяем обработчик события
        let text = newMessageElement.current.value;
        let action = {type: 'UPDATE-NEW-MESSAGE', newMessage: text};
        props.dispatch(action);//отправляем в state.js то значение, что вводит user в поле textarea
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
                    <textarea onChange={onMessageChange} value={props.messagesPage.newMessages} className={c.textarea}
                              //значение(value) textarea зависит от того, что сидит в state.js
                              // onChange срабатывает всякий раз, когда идет попытка изменить поле textarea
                              ref={newMessageElement} name="message" rows="10" cols="40"
                              placeholder='New message here......' >
                    </textarea>
                    <button className={c.button} onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
};

//экспортируем компоненту
export default Dialogs;
