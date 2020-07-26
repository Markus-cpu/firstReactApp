import React from 'react';
import c from './Infoblock.module.css';
import Infoperson from './Infoperson/Infoperson';
import Myposts from './Myposts/Myposts';




const Infoblock = (props) => {
    let mypostElement = props.mypostData.map(mypost => <Myposts massage={mypost.post} id={mypost.id}/>);
    let newPostElement = props.myNewPost;

    let onAddPost =()=> {
        props.addPost();
    };

    let onPostChange =(e)=> {
        let text = e.target.value;
        props.updateNewPost(text);
    };

    return (
        <div>
            <img className={c.img} src="https://www.goldmansachs.com/worldwide/banner-img-1200x200.jpg" alt="" />
            <Infoperson  profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <div className={c.inputpost}>
                 <textarea onChange={ onPostChange }  value={newPostElement}
                           className={c.textarea}  placeholder="Your message here...."/>
                 <button onClick={ onAddPost } className={c.button}>Send</button>
                 {/*Когда происходит клик по кнопке, она вызывает функцию onAddPost, которую мы определили локально*/}
            </div>
            {mypostElement}
        </div>
    )
};

export default Infoblock;