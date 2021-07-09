import React from "react";
import {addMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (message) => {
      let action = updateNewMessageTextCreator(message);
      dispatch(action);
    },
    addMessage: () => {
      dispatch(addMessageCreator());
    },

  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;