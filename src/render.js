import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {addPost} from './Redux/state';
import {addMessage} from './Redux/state';
import {updateNewPost} from './Redux/state';

export let rerenderEntireTree =(state)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addMessage={addMessage} updateNewPost={updateNewPost} />
        </BrowserRouter>,
        document.getElementById('root')
    );
};




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
