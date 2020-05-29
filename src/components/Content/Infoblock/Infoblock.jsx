import React from 'react';
import c from './Infoblock.module.css';
import Infoperson from './Infoperson/Infoperson';
import Myposts from './Myposts/Myposts';

const Infoblock = (props) => {

    let mypostElement = props.mypostData.map(mypost => <Myposts massage={mypost.post} />);
    let newPostElement = React.createRef();

    let addPost =()=> {
        props.addPost();
    };

    let onPostChange =()=> {
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    };

    return (
        <div>
            <Infoperson />
            <div className={c.inputpost}>
                 <textarea onChange={onPostChange} ref={newPostElement} value={props.myNewPost} className={c.textarea} rows="10" cols="40" placeholder="Your message here...."/>
                 <button onClick={ addPost } className={c.button}>Send</button>
            </div>
            {mypostElement}
            
        </div>
        
    )
}

export default Infoblock;
