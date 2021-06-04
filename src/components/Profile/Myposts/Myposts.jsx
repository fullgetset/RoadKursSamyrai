import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = () => {
  let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 1, message: 'It\'s my first post!', likesCount: 25},
  ];
  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} count={postData[0].likesCount}/>
        <Post message={postData[1].message} count={postData[1].likesCount}/>
      </div>
    </div>
  )
}

export default Myposts;