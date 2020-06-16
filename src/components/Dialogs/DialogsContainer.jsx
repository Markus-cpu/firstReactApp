import React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../Redux/messagesPage-reducer';


const DialogsContainer = (props) => {
   let state = props.store.getState().messagesPage;

    let addMessage =()=> {//обработчик события
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    };

    let MessageChange =(text)=> {//определяем обработчик события
        let action = updateNewMessageActionCreator(text);
        props.store.dispatch(action);//отправляем в store.js то значение, что вводит user в поле textarea
    };

    //здесь переменные вызываются
    return (
        <Dialogs addMessage={addMessage} updateNewMessage={MessageChange} dialogsData={state.dialogsData}
                 messagesData={state.messagesData} newMessages={state.newMessages}/>
    )
};

//экспортируем компоненту
export default DialogsContainer;
