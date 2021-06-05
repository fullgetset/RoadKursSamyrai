import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = () => {
  let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 1, message: 'It\'s my first post!', likesCount: 25},
    {id: 1, message: 'bla bla bla', likesCount: 3}
  ];


  let postsElements = postData
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