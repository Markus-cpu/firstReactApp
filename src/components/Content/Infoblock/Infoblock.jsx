import React from 'react';
import c from './Infoblock.module.css';
import Infoperson from './Infoperson/Infoperson';
import Myposts from './Myposts/Myposts';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../Redux/contentPage-reducer';



const Infoblock = (props) => {

    let mypostElement = props.mypostData.map(mypost => <Myposts massage={mypost.post} />);
    let newPostElement = props.myNewPost;

    let addPost =()=> {
        let action = addPostActionCreator();//функция actionCreator(для создания action object
        props.dispatch(action);
    };

    let onPostChange =(e)=> {
        let text = e.target.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div>
            <Infoperson dialogsData={props.dialogsData} />
            <div className={c.inputpost}>
                 <textarea onChange={ onPostChange }  value={newPostElement}
                           className={c.textarea}  placeholder="Your message here...."/>
                 <button onClick={ addPost } className={c.button}>Send</button>
                 {/*Когда происходит клик по кнопке, она вызывает функцию addPost, которую мы определили локально*/}
            </div>
            {mypostElement}
        </div>
    )
};

export default Infoblock;
