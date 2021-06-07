import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogsItems/DilogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


  let dialogsElements = props.dialogsData
    .map((dialog) => {
      return <DialogItem id={dialog.id} name={dialog.name}/>
    });


  let messagesElements = props.messagesData
    .map((message) => {
      return <Message message={message.message}/>
    })

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messagesItems}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;