import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post";


const Myposts = (props) => {

  let postsElements = props.posts
    .map((post) => {
      return <Post
        key={post.id.toString()}
        value={post}
        message={post.message}
        count={post.likesCount}/>
    });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();

  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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