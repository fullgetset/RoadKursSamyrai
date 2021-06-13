import React from "react";
import className from './Post.module.css';

const Post = (props) => {
  return (
    <div className={className.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhy_b4VIS5weweOfs2CH1xjoPYAG_NYzpryg&usqp=CAU"
           alt="img"/>
      {props.message}
      <div>
        <span>like {props.count}</span>
      </div>
    </div>
  )
}

export default Post;