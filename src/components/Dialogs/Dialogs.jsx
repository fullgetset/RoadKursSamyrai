import React from "react";
import className from './Dialogs.module.css'
import DialogItem from "./DialogsItems/DilogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
debugger
    let dialogsElements = props.dialogsData
        .map(dialog => <DialogItem key={dialog.id.toString()} value={dialog} id={dialog.id} name={dialog.name}/>)


    let messagesElements = props.messagesData
        .map((message) => {
            return <Message key={message.id.toString()} value={message} message={message.message}/>
        });

    let newMessage = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={className.dialogs}>
            <div className={className.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={className.messagesItems}>
                <div>{messagesElements}</div>

                <div>
                    <div><textarea
                        onChange={onMessageChange}
                        ref={newMessage}
                        value={props.newMessageText}/></div>
                    <div>
                        <button onClick={onAddMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;
