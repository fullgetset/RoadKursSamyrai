import React from "react";
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhy_b4VIS5weweOfs2CH1xjoPYAG_NYzpryg&usqp=CAU"
           alt="img"/>
      post1
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post;