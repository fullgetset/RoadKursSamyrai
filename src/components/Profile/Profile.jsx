import React from "react";
import className from "./ProfileCSS.module.css";
import ProfileInfo from "./Myposts/ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/myPostsContainer";

const Profile = (props) => {
  return (
    <div className={className.items}>
      <ProfileInfo />
      <div className={className.item}>
        <MypostsContainer />
      </div>
    </div>
  );
};

export default Profile;
