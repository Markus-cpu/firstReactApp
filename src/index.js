import React from 'react';
import './index.css';
import state, {sibscribe} from './Redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {addPost, addMessage, updateNewPost, updateNewMessage} from './Redux/state';

let rerenderEntireTree =(state)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addMessage={addMessage} updateNewPost={updateNewPost} updateNewMessage = {updateNewMessage}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(state);
sibscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

