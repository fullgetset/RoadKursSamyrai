import React from "react";
import s from './ProfileCSS.module.css';
import Myposts from "./Myposts/Myposts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://vjoy.cc/wp-content/uploads/2019/08/1-22.jpg' alt="image"/>
      </div>
      <div>
        Avatar + description
      </div>
      <div>
        <Myposts/>
      </div>
    </div>
  )
}

export default Profile;