import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {
  let postsElements = props.posts
    .map((post) => {
      return <Post key={post.id.toString()} value={post} message={post.message} count={post.likesCount}/>
    });

  let addPost = () => {
    return alert('Hello!')
  };

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default Myposts;