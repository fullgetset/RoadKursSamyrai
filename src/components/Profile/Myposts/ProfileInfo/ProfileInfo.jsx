import React from "react";
import className from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src='https://sbakalov.ru/wp-content/uploads/2018/09/Razmery-Fejsbuk.png'
             alt="ProfileImage"/>
      </div>
      <div className={className.descriptionBlock}>
        Avatar + description
      </div>
    </div>

  )
}

export default ProfileInfo;
