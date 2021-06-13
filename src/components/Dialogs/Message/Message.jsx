import className from "../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={className.message}>{props.message}</div>
  )
};

export default Message;