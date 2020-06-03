import React from 'react';
import c from './Infoblock.module.css';
import Infoperson from './Infoperson/Infoperson';
import Myposts from './Myposts/Myposts';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../Redux/state';



const Infoblock = (props) => {

    let mypostElement = props.mypostData.map(mypost => <Myposts massage={mypost.post} />);
    let newPostElement = React.createRef();

    let addPost =()=> {
        let action = addPostActionCreator();//функция actionCreator(для создания action object
        props.dispatch(action);
    };

    let onPostChange =()=> {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div>
            <Infoperson />
            <div className={c.inputpost}>
                 <textarea onChange={ onPostChange } ref={newPostElement} value={props.myNewPost}
                           className={c.textarea} rows="10" cols="40" placeholder="Your message here...."/>
                 <button onClick={ addPost } className={c.button}>Send</button>
                 {/*Когда происходит клик по кнопке, она вызывает функцию addPost, которую мы определили локально*/}
            </div>
            {mypostElement}
        </div>
    )
};

export default Infoblock;
