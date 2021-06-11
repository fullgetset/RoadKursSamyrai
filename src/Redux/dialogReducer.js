const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: '5',
        message: state.newMessageTex,
      };
      state.messagesData.push(newMessage);
      state.newMessageTex = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageTex = action.newMessage;
      return state;
    default:
      return state;
  }
}

export const addMessageCreator =
  () => ({type: ADD_MESSAGE})
export const updateNewMessageTextCreator =
  (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export default dialogReducer;