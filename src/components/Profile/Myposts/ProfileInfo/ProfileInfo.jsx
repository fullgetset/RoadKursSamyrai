import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src='https://vjoy.cc/wp-content/uploads/2019/08/1-22.jpg' alt="ProfileImage"/>
      </div>
      <div className={s.descriptionBlock}>
        Avatar + description
      </div>
    </div>

  )
}

export default ProfileInfo;