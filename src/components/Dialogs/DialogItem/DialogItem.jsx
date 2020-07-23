import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  let name = props.name;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <div>
        <img src="https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
             alt=""/>
      </div>

      <div className={s.link}>
        <NavLink to={path}>{name}</NavLink>
      </div>
    </div>
  )
}

export default DialogItem;