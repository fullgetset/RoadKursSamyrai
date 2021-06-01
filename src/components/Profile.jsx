import React from "react";
import s from './ProfileCSS.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://vjoy.cc/wp-content/uploads/2019/08/1-22.jpg' alt="image"/>
      </div>
      <div>
        Avatar + description
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div className={s.posts}>
          <div className={s.item}>
            post1
          </div>
          <div className={s.item}>
            post2
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;