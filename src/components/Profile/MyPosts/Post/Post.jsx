import React from 'react';
import s from './Post.module.css'

const Post = (props) => {

  return (
    <div className={s.post}>
      <div className={s.item}>  
        <img alt='avatar' src='https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'></img>
        {props.message}
        <div>
          <span>like {props.likesCount}</span>
        </div>
        </div>
    </div>
  );

}

export default Post;