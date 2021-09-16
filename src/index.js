import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'Hi, how are you', likesCount: 12},
  {id: 2, message: 'It\'s my first post', likesCount: 11},
  {id: 3, message: 'Yo', likesCount: 11},
  {id: 4, message: 'Yo', likesCount: 11},
  {id: 5, message: 'Yo', likesCount: 11},
  {id: 6, message: 'Yo', likesCount: 11},
]


let dialogs = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: "Andrew" },
  {id: 3, name: "Viktor" },
  {id: 4, name: "Valera" },
  {id: 5, name: "Sveta" },
  {id: 6, name: "Sasha" },
]


let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your it-kamasutra'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'},
  {id: 6, message: 'Yo'},
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
