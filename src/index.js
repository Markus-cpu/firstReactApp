import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let dialogsData = [
  {id: 1, name: 'Marat'},
  {id: 2, name: 'Victor'},
  {id: 3, name: 'Tanya'},
  {id: 4, name: 'Sveta'},
  {id: 5, name: 'Mark'},
  {id: 6, name: 'Leila'}
]


let messagesData = [
  {message: 'How are you?'},
  {message: 'What\'s up?'},
  {message: 'What do you think about me?'},
  {message: 'Who Am I?'},
  {message: 'You know me, my friend?'},
  {message: 'No, I\'m not!'}
]


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

