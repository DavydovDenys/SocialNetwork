let rerenderEntireTree = () => {
  console.log('state changed!!!')
}

let state = {
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
}

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 4,
    message: state.defaultText,
    likesCount: 3
  };

  state.profileData.push(newPost);
  state.defaultText = '';
  rerenderEntireTree(state);

}

export const updateNewPost = (newText) => {
  state.defaultText = newText;
  rerenderEntireTree(state);
}

export const displayMessageHandler = (userText) => {

  state.defaultText = userText
  rerenderEntireTree(state);
}

export let addMessage = () => {
  let message = {
    id: 3,
    message: state.defaultText
  }

  state.dialogsData.messages.push(message);
  state.defaultText = '';
  rerenderEntireTree(state);

}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}


export default state;