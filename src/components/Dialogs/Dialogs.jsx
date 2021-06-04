import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={s.activeLink}>{props.name}</NavLink>
    </div>
  )
};

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem id={'1'} name={'Yuri'}/>
        <DialogItem id={'2'} name={'Nastya'}/>
        <DialogItem id={'3'} name={'Tamara'}/>
        <DialogItem id={'4'} name={"AudiA6C5"}/>
      </div>
      <div className={s.messagesItems}>
        <Message message={'Hi i am Yuri'}/>
        <Message message={'Hi i am Nastya'}/>
        <Message message={'Hi i am Tamara'}/>
        <Message message={'Hi i am Car'}/>
      </div>
    </div>
  )
}

export default Dialogs;