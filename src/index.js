import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {id: '1', name: 'Yuri'},
  {id: '2', name: 'Nastya'},
  {id: '3', name: 'Tamara'},
  {id: '4', name: 'AudiA6C5'}
];

let messagesData = [
  {id: '1', message: 'Hi i am Yuri'},
  {id: '2', message: 'Hi i am Nastya'},
  {id: '3', message: 'Hi i am Tamara'},
  {id: '4', message: 'Hi i am Car'},
];

let postData = [
  {id: 1, message: 'Hi, how are you?', likesCount: 12},
  {id: 1, message: 'It\'s my first post!', likesCount: 25},
  {id: 1, message: 'bla bla bla', likesCount: 3}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
