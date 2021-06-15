import React from "react";
import Myposts from "../Myposts";
import {addPostCreator, updateNewPostTextCreator} from "../../../../Redux/profileReducer";


const MypostsContainer = (props) => {

  let state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostCreator());

  };

  const onPostChange = (text) => {
    let action = updateNewPostTextCreator(text)
    props.store.dispatch(action);
  };

  return (
    <Myposts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}/>
  )
};

export default MypostsContainer;