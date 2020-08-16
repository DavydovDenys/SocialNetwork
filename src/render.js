import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addMessage, addPost, displayMessageHandler, updateNewPost} from "./redux/state";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPost={updateNewPost}
        displayMessageHandler={displayMessageHandler}
        addMessage={addMessage}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}