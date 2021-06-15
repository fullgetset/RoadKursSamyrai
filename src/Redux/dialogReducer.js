const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messagesData: [
    {id: '1', message: 'Hi i am Yuri'},
    {id: '2', message: 'Hi i am Nastya'},
    {id: '3', message: 'Hi i am Tamara'},
    {id: '4', message: 'Hi i am Car'},
  ],


  dialogsData: [
    {id: '1', name: 'Yuri'},
    {id: '2', name: 'Nastya'},
    {id: '3', name: 'Tamara'},
    {id: '4', name: 'AudiA6C5'}
  ],


  newMessageTex: 'it-message.com',
};

const dialogReducer = (state = initialState, action) => {
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
  () => ({type: ADD_MESSAGE});
export const updateNewMessageTextCreator =
  (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export default dialogReducer;