import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postElements = [
    {id: 1, message: 'Hello!', likesCount: 23},
    {id: 2, message: 'Yo!', likesCount: 7},
    {id: 3, message: 'My post', likesCount: 19},
]

let dialogsData = [
  {id: 1, name: 'Dima'},
  {id: 2, name: 'Andrew'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Ron'},
]

let messagesData = [
  {id: 1, message: 'Hello!'},
  {id: 2, message: 'Yo!'},
]

let contentData = {postElements, dialogsData, messagesData}

ReactDOM.render(
  <React.StrictMode>
    <App data={contentData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
