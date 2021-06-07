import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogsItems/DilogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let dialogsData = [
    {id: '1', name: 'Yuri'},
    {id: '2', name: 'Nastya'},
    {id: '3', name: 'Tamara'},
    {id: '4', name: 'AudiA6C5'}
  ];

  let messagesData = [
    {id: '1', message: 'Hi i am Yuri'},
    {id: '2', message: 'Hi i am Nastya'},
    {id: '3', message: 'Hi i am Tamara'},
    {id: '4', message: 'Hi i am Car'},
  ];

  let dialogsElements = dialogsData
    .map((dialog) => {
      return <DialogItem id={dialog.id} name={dialog.name}/>
    });


  let messagesElements = messagesData
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