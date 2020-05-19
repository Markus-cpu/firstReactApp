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
    
    //здесь переменные вызываются
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

//экспортируем компоненту
export default Dialogs;