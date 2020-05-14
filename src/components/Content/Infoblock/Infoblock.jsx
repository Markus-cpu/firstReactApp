import React from 'react';
import c from './Infoblock.module.css';
import Infoperson from './Infoperson/Infoperson';
import Myposts from './Myposts/Myposts';




const Infoblock = (props) => {

    let mypostData = [
        {post: 'React изначально был спроектирован так, чтобы его можно было внедрять постепенно. Другими словами, вы можете начать с малого и использовать только ту функциональность React, которая необходима вам в данный момент. Информация в этом разделе будет полезна в любой ситуации: при первом знакомстве с React, при создании простой динамической HTML-страницы и даже при проектировании сложного React-приложения.', post1: 'Для простых шаблонов это допустимо'},
        {post: 'Но раньше, в старые времена, прямого доступа к прототипу объекта не было.', post1: 'Надёжно работало только свойство'},
        {post: 'I like death metal music!!!', post1: 'Откуда-то мы должны получать эти данные?'},
        {post: 'Но раньше,', post1: 'Надёжно работало'}   
    ]

    let mypostElement = mypostData.map(mypost => <Myposts massage={mypost.post} massage2={mypost.post1} />);

    return (
        <div>
            <Infoperson />
            <div className={c.inputpost}>
                 <textarea className={c.textarea} rows="10" cols="40" placeholder="Your message here...."></textarea>
                 <button className={c.button}>Send</button>
            </div>
            {mypostElement}
            
        </div>
        
    )
}

export default Infoblock;
