import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, updateNewPostText} from "./Redux/state";


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          addMessage={addMessage}
          updateNewPostText={updateNewPostText}/>
      </React.StrictMode>
    </BrowserRouter>, document.getElementById('root')
  );
};

export default rerenderEntireTree;
