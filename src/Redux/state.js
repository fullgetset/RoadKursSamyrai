let rerenderEntireTree = () => {
  console.log('State changed');
}

let state = {

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
}

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 3,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
/*мы вызываем эту функцию rerenderEntireTree , но она у нас пустышка . т.к. возвращает
консоль лог ....
 */
};

export let addMessage = () => {
  let newMessage = {
    id: '5',
    message: state.dialogsPage.newMessageTex,
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageTex = '';
  rerenderEntireTree(state);
};


export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageTex = newMessage;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};
/*
Далее мы создали новую фунцию subscribe = (observer) которая присваевает
функции  rerenderEntireTree новое значение . и Юзаем её в индекс жс
 */


export default state;