import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let message = props.state.messages.map( (m) => <Message id={m.id} message={m.message}/> );
  let dialogs = props.state.dialogs.map( (d) => <DialogItem
                                                                      id={d.id}
                                                                      name={d.name}
                                                                      dispatch={props.dispatch}
                                                                      /*displayMessageHandler={props.displayMessageHandler}
                                                                      addMessage={props.addMessage}*//> );

  /*Отрисовка компонента*/
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {/*Вывод компонента <DialogItem />*/}
        {dialogs}
      </div>
      <div className={s.messages}>
        {/*Вывод компонента <Message />*/}
        {message}
      </div>
    </div>
  )
}

export default Dialogs;