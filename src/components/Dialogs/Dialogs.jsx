import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to='/dialogs/1'>Dima</NavLink>
        </div>
        <div className={s.dialog}>Oleg</div>
        <div className={s.dialog}>Roman</div>
        <div className={s.dialog}>Sveta</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hello!</div>
        <div className={s.message}>How are Yoy?</div>
        <div className={s.message}>Wow!</div>
        <div className={s.message}>Yo!</div>
      </div>
    </div>
  )
}

export default Dialogs;