import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import MarkusCpuApp from "./App";


ReactDOM.render(
        <MarkusCpuApp />,
    document.getElementById('root')
)

/*rerenderEntireTree(store.getState());//функция перерисовки всего дерева App, после того как state изменился
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});*/

