import React from 'react';
import c from './Infoblock.module.css';
import Infoperson from './Infoperson/Infoperson';
import Myposts from './Myposts/Myposts';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../forms/FormsControls";

const maxLength =  maxLengthCreator(30)
const PostForm =React.memo(props=> {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field className={c.textarea}
                            placeholder="Your message here...."
                            name={'addNewPostText'}
                            component={Textarea}
                            validate={[required, maxLength]}
                    />
                </div>
                <button className={c.button}>Send</button>
            </form>
        </>
    )
})

const PostReduxForm = reduxForm({form: 'postText',})(PostForm)

const Infoblock =React.memo(props => {
    let mypostElement = props.mypostData.map(mypost => <Myposts massage={mypost.post}
                                                                id={mypost.id}
                                                                key={mypost.id}/>
    );
    let addNewPost =(values)=> {
        props.addPost(values.addNewPostText)
    };
    return (
        <div>
            <img className={c.img} src="https://www.goldmansachs.com/worldwide/banner-img-1200x200.jpg" alt="" />
            <Infoperson savePhoto={props.savePhoto} isOwner={props.isOwner}  profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <div className={c.inputpost}>
                <PostReduxForm onSubmit={addNewPost}/>
                {/*<textarea onChange={ onPostChange }  value={newPostElement}
                           className={c.textarea}  placeholder="Your message here...."/>
                 <button onClick={ onAddPost } className={c.button}>Send</button>*/}
                {/*Когда происходит клик по кнопке, она вызывает функцию onAddPost, которую мы определили локально*/}
            </div>
            {mypostElement}
        </div>
    )
})

export default Infoblock;