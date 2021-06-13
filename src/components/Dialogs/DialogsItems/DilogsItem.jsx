import React from "react";
import className from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
  return (
    <div className={className.dialog}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={className.activeLink}>{props.name}</NavLink>
    </div>
  )
};


export default DialogItem;