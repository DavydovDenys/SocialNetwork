import React from "react";
import s from './Friends.module.css'
import Friend from '../Friends/Friend/Friend'

const Friends = () => {
  return (
    <div className={s.friends}>

      <Friend />
    </div>
  )
}

export default Friends;