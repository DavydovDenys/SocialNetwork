import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {
  return (
    <div className={s.posts}>
      <div className={s.item}>
        My Posts
      </div>
      <div className={s.item}>
        <textarea placeholder={props.name}></textarea>
        <button>Send</button>
        <button>Remove</button>
      </div>
      <Post message='Hello! My post' like='12'/>
      <Post message='My another post' like='23'/>
      <Post message='My third post' like='3'/>
    </div>
  );
}

export default MyPosts;