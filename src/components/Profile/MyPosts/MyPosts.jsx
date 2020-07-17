import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElements = [
    {id: 1, message: 'Hello!', likesCount: 23},
    {id: 2, message: 'Yo!', likesCount: 7},
    {id: 3, message: 'My post', likesCount: 19},
  ]

  let post = postsElements.map( (p) => <Post id={p.id} message={p.message} likesCount={p.likesCount} /> );

  return (
    <div className={s.posts}>
      <div className={s.postsBlock}>
        <h3>My Posts</h3>
      </div>
      <div className={s.item}>
        <textarea placeholder={props.name}></textarea>
        <div className={s.button}>
          <button>Send</button>
        </div>
      </div>
      {post}
    </div>
  );
}

export default MyPosts;