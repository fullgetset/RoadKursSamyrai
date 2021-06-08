import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItems/DilogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


  let dialogsElements = props.state.dialogsData
    .map(dialog => <DialogItem key={dialog.id.toString()} value={dialog} id={dialog.id} name={dialog.name}/>)


  let messagesElements = props.state.messagesData
    .map((message) => {
      return <Message key={message.id.toString()} value={message} message={message.message}/>
    })

  let newMessage = React.createRef();

  let addMessage = () => {
    let text = newMessage.current.value;
    props.addMessage(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>


      <div className={s.messagesItems}>
        {messagesElements}
      </div>
      <div>
        <textarea ref={newMessage}></textarea>
      </div>
      <div>
        <button onClick={addMessage}>add message</button>
      </div>
    </div>
  )
}

export default Dialogs;