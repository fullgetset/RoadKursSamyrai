let store = {
  _state: {

    profilePage: {

      postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!', likesCount: 25},
        {id: 3, message: 'bla bla bla', likesCount: 3}
      ],

      newPostText: 'it-kamasutra.com',
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 3,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._CallSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._CallSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: '5',
        message: this._state.dialogsPage.newMessageTex,
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageTex = '';
      this._CallSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessageTex = action.newMessage;
      this._CallSubscriber(this._state);
    }

  }
}


export default store;
window.store = store;




