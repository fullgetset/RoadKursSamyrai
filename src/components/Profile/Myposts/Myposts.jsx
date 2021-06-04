import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = () => {
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
        <Post message={'Hi, how are you?'} count={'25'}/>
        <Post message={"It's my first post!"} count={'15'}/>
      </div>
    </div>
  )
}

export default Myposts;