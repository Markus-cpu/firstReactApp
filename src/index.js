import React from 'react';
import './index.css';
import store from './Redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App store={store}/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

/*rerenderEntireTree(store.getState());//функция перерисовки всего дерева App, после того как state изменился
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
