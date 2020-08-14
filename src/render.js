import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost, updateNewPost} from "./redux/state";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPost={updateNewPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}