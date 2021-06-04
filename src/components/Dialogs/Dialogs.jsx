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

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
        <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
        <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
      </div>
      <div className={s.messagesItems}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
        <Message message={messagesData[2].message}/>
        <Message message={messagesData[3].message}/>
      </div>
    </div>
  )
}

export default Dialogs;