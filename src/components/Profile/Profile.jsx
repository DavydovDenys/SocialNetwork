import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  /*let postsElements = [
    {id: 1, message: 'Hello!', likesCount: 23},
    {id: 2, message: 'Yo!', likesCount: 7},
    {id: 3, message: 'My post', likesCount: 19},
  ]*/

  return (
    <div>
      <ProfileInfo />
      <MyPosts data={props.data}/>
    </div>
  );
}

export default Profile;