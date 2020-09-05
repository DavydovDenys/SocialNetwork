import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  let name = props.name;

  let sendMessage = React.createRef();

  let text = () => {
    /*props.addMessage()*/
    props.dispatch({type: 'ADD-MESSAGE'});
  }

  const userMessageHandler = () => {
    let userText = sendMessage.current.value;

    props.dispatch({type: 'DISPLAY-MESSAGE-HANDLER', userText})
    /*props.displayMessageHandler(userText);*/
  }

  return (
    <div className={`${s.dialog} ${s.active}`}>
      <div>
        <img src="https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
             alt=""/>
      </div>

      <div className={s.link}>
        <NavLink to={path}>{name}</NavLink>
      </div>
      <div>
        <textarea
          onChange={userMessageHandler}
          ref={sendMessage}
          cols="30"
          rows="2"
          />
        <button onClick={text}>send</button>
      </div>
    </div>
  )
}

export default DialogItem;