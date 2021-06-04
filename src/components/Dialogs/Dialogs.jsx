import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/1'} activeClassName={s.activeLink}>Yuri</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/2'} activeClassName={s.activeLink}>Nastya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/3'} activeClassName={s.activeLink}>Tamara</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/4'} activeClassName={s.activeLink}>AudiA6C5</NavLink>
        </div>
      </div>
      <div className={s.messagesItems}>
        <div className={s.message}>Hi I am Yuri</div>
        <div className={s.message}>Hi I am Nastya</div>
        <div className={s.message}>Hi I am MyaU</div>
        <div className={s.message}>Hi I am AudiA6C5</div>
      </div>
    </div>
  )
}

export default Dialogs;