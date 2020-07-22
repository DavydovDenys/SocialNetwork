import React from "react";
import s from './Friend.module.css'

const Friend = (props) => {
  return (
    <div className={s.friend}>
      <div className={s.name}>
        {props.name}
      </div>
      <div>
        <img src="https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg"
             alt="cat"/>
      </div>
    </div>
  )
}

export default Friend;