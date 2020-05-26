import React from 'react';
import c from './Infoblock.module.css';
import Infoperson from './Infoperson/Infoperson';
import Myposts from './Myposts/Myposts';

const Infoblock = (props) => {

    let mypostElement = props.state.mypostData.map(mypost => <Myposts massage={mypost.post} massage2={mypost.post1} />);
    let newPostElement = React.createRef();
    let addPost =()=> {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';//obnulenie poly
    }

    return (
        <div>
            <Infoperson />
            <div className={c.inputpost}>
                 <textarea ref={newPostElement} className={c.textarea} rows="10" cols="40" placeholder="Your message here...."></textarea>
                 <button onClick={ addPost } className={c.button}>Send</button>
            </div>
            {mypostElement}
            
        </div>
        
    )
}

export default Infoblock;
