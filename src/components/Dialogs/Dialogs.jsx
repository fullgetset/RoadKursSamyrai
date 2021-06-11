import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItems/DilogsItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageTextCreator} from "../../Redux/state";


const Dialogs = (props) => {


  let dialogsElements = props.state.dialogsData
    .map(dialog => <DialogItem key={dialog.id.toString()} value={dialog} id={dialog.id} name={dialog.name}/>)


  let messagesElements = props.state.messagesData
    .map((message) => {
      return <Message key={message.id.toString()} value={message} message={message.message}/>
    })

  let newMessage = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageCreator());
  }

  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.dispatch(updateNewMessageTextCreator(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messagesItems}>
        <div>{messagesElements}</div>

        <div>
          <div><textarea
            onChange={onMessageChange}
            ref={newMessage}
            value={props.newMessageText}/></div>
          <div>
            <button onClick={addMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;
