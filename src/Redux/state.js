import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";



let store = {
  _state: {

    profilePage: {

      postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!', likesCount: 25},
        {id: 3, message: 'bla bla bla', likesCount: 3}
      ],

      newPostText: 'Hello! World!',
    },

    dialogsPage: {
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
    },
    sidebar: {},
  },
  _CallSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._CallSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._CallSubscriber(this._state);

  }
};






export default store;
window.store = store;




