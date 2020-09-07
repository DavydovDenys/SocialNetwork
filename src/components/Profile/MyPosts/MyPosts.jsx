import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/state'

const MyPosts = (props) => {

  let post = props.state.profileData.map( (p) => <Post id={p.id} message={p.message} likesCount={p.likesCount} /> );

  let newPostElement = React.createRef();

  let addPost = () => {
    /*props.addPost();*/
    /*props.dispatch({type: 'ADD-POST'})*/
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = () =>{
    let text = newPostElement.current.value;
    /*props.dispatch({type: 'UPDATE-NEW-POST',text})*/
    /*props.updateNewPost(text);*/
    props.dispatch(updateNewPostActionCreator(text))
  }

  return (
    <div className={s.posts}>
      <div className={s.postsBlock}>
        <h3>My Posts</h3>
      </div>
      <div className={s.item}>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.state.defaultText}/>
        <div className={s.button}>
          <button onClick={ addPost }>Send</button>
        </div>
      </div>
      {post}
    </div>
  );
}

export default MyPosts;