import React from "react";
import s from './ProfileCSS.module.css';
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./Myposts/ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div className={s.items}>
      <ProfileInfo/>
      <div className={s.item}>
        <Myposts posts={props.state.postData}/>
      </div>
    </div>
  )
}

export default Profile;