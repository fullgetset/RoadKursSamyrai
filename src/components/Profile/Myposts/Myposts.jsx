import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {


  let postsElements = props.postData
    .map((post) => {
      return <Post message={post.message} count={post.likesCount}/>
    });

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
        {postsElements}
      </div>
    </div>
  )
}

export default Myposts;