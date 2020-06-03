"use strict";

import React from 'react';
import './index.css';
import store from './Redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree =(state)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
            {/*привязка dispatch к store с помощью метода bind,
            что он именно в контексте него передавался дальше
            здесь мы его не вызываем*/}
        </BrowserRouter>,
        document.getElementById('root')
    );
};
rerenderEntireTree(store.getState());//функция перерисовки всего дерева App, после того как state изменился
store.sibscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

