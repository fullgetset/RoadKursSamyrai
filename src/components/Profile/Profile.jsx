import React from "react";
import s from './ProfileCSS.module.css';
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./Myposts/ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={s.items}>
      <ProfileInfo/>
      <div className={s.item}>
        <Myposts/>
      </div>
    </div>
  )
}

export default Profile;