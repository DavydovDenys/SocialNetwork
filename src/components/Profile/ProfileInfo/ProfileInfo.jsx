import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.profileImg}>
        <img alt="img"
             src="https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
        </img>
      </div>
      <div className={s.description}>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;