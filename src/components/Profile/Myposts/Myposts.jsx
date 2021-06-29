import React from "react";
import className from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {

    const postsElements = props.postData.map((post) => {
        return <Post
            key={post.id.toString()}
            value={post}
            className={className.newPostItem}
            message={post.message}
            count={post.likesCount}/>
    });

    const newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost()


    };

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

    };

    return (
        <div className={className.postBlock}>
            <h2>My posts</h2>
            <div>
                <div>
          <textarea onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={className.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default Myposts;