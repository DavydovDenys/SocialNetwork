// используем константы для подсвечивания их в редакторе чтобы не ошибиться при написании action.type в dispatch
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_POST ='UPDATE-NEW-POST'
const ADD_POST = 'ADD-POST'
const DISPLAY_MESSAGE_HANDLER = 'DISPLAY-MESSAGE-HANDLER'

/*let rerenderEntireTree = () => {
  console.log('state changed!!!')
}*/
let store = {

  _state: {
    profileData: [
      {id: 1, message: 'Hello!', likesCount: 23},
      {id: 2, message: 'Yo!', likesCount: 7},
      {id: 3, message: 'My post', likesCount: 19},
    ],
    defaultText: 'it-kamasutra.com',
    dialogsData: {
      messages: [],
      dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Ron'},
      ],
    },
    friends: [
      {id: 1, name: 'Den'},
      {id: 2, name: 'Armin'},
      {id: 3, name: 'Bob'},
    ],
  },

  getState() {
    return this._state
  },

  _callSubscriber(state) {
    console.log('state changed!!!')
  },

  /*addPost() {
    let message = this._state.defaultText;
    let newPost = {
      id: 4,
      message,
      likesCount: 3
    };

    this._state.profileData.push(newPost);
    this._state.defaultText = '';
    this._callSubscriber(this._state);
  },*/


  /*updateNewPost(newText) {
    this._state.defaultText = newText;
    this._callSubscriber(this._state);
  },*/

  /*displayMessageHandler(userText) {

    this._state.defaultText = userText
    this._callSubscriber(this._state);
  },*/

  /*addMessage() {
    let message = {
      id: 3,
      message: this._state.defaultText
    };

    this._state.dialogsData.messages.push(message);
    this._state.defaultText = '';
    this._callSubscriber(this._state);

  },*/

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_MESSAGE) {  // action.type === 'ADD-MESSAGE'
      let message = {
        id: 3,
        message: this._state.defaultText
      };

      this._state.dialogsData.messages.push(message);
      this._state.defaultText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === UPDATE_NEW_POST) {  // action.type === 'UPDATE-NEW-POST'
      this._state.defaultText = action.newText;
      this._callSubscriber(this._state);
    }
    else if (action.type === ADD_POST) {  // action.type === 'ADD-POST'
      let message = this._state.defaultText;
      let newPost = {
        id: 4,
        message,
        likesCount: 3
      };

      this._state.profileData.push(newPost);
      this._state.defaultText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === DISPLAY_MESSAGE_HANDLER) {  // action.type === 'DISPLAY-MESSAGE-HANDLER'
      this._state.defaultText = action.userText;
      this._callSubscriber(this._state);
    }
  }
}

/*window.state = state;*/

/*export let addPost = () => {
  let newPost = {
    id: 4,
    message: state.defaultText,
    likesCount: 3
  };*/

/*state.profileData.push(newPost);
state.defaultText = '';
rerenderEntireTree(state);

}
*/
/*export const updateNewPost = (newText) => {
  state.defaultText = newText;
  rerenderEntireTree(state);
}*/

/*export const displayMessageHandler = (userText) => {

  state.defaultText = userText
  rerenderEntireTree(state);
}*/

/*export let addMessage = () => {
  let message = {
    id: 3,
    message: state.defaultText
  }

  state.dialogsData.messages.push(message);
  state.defaultText = '';
  rerenderEntireTree(state);

}*/

/*
export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}
*/

// создаем функции которые возвращают объект (action)
export const addMessageActionCreator = () => {  //  return {type: 'ADD-MESSAGE'}
  return {
    type: ADD_MESSAGE
  }
}

export const updateNewPostActionCreator = (text) => ({  //  return {type: 'UPDATE-NEW-POST', newText: text}
  type: UPDATE_NEW_POST,
  newText: text
})

export const addPostActionCreator = () => ({type: ADD_POST})  //  return {type: 'ADD-POST'}

export const displayMessageHandlerActionCreator = (text) =>  //  return {type: 'DISPLAY-MESSAGE-HANDLER', userTExt: text}
  ({
    type: DISPLAY_MESSAGE_HANDLER,
    userText: text
  })

export default store;