import React from "react";
import s from './Friends.module.css'
import Friend from '../Friends/Friend/Friend'

const Friends = (props) => {
  return (
    <div className={s.friends}>

      <Friend id={props.id} name={props.name} />
    </div>
  )
}

export default Friends;