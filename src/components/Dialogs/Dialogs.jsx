import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
  /*Тут идут данные с сервера*/

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
  /*Обрабатываем массивы с данными с помощью функции map*/

  let dialogs = dialogsData.map((d) => {
    return <DialogItem name={d.name} id={d.id}/>;
  });
  let message = messagesData.map(m => <Message id={m.id} message={m.message}/>);

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