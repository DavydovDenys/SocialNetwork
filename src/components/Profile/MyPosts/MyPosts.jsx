import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

  let post = props.state.map( (p) => <Post id={p.id} message={p.message} likesCount={p.likesCount} /> );

  return (
    <div className={s.posts}>
      <div className={s.postsBlock}>
        <h3>My Posts</h3>
      </div>
      <div className={s.item}>
        <textarea placeholder={post.name}></textarea>
        <div className={s.button}>
          <button>Send</button>
        </div>
      </div>
      {post}
    </div>
  );
}

export default MyPosts;