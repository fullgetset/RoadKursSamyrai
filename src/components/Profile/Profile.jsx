import React from "react";
import className from './ProfileCSS.module.css';
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./Myposts/ProfileInfo/ProfileInfo";


const Profile = (props) => {

  return (
    <div className={className.items}>
      <ProfileInfo/>
      <div className={className.item}>
        <Myposts
          posts={props.profilePage.postData}
          newPostText={props.profilePage.newPostText}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  )
}

export default Profile;