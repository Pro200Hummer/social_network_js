import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hi, how are you?", likeCounts: 21},
                {id: 2, post: "It's my first post", likeCounts: 13},
            ],
            newPostText: "",
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Natali"},
                {id: 2, name: "Nikita"},
                {id: 3, name: "Monya"},
                {id: 4, name: "Frosya"},
            ],
            messages: [
                {id: 1, message: "Hi, how are you?"},
                {id: 2, message: "Yo, bro. Whats up?"},
                {id: 3, message: "How are your study?"},
                {id: 4, message: "YO! YO! YO!"},
            ],
            newMessageText: "",
        },
    },
    _callSubscriber () {
        console.log("Render isDone")
    },
    getState(){
      return this._state
    },
    subscriber (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state);
    },
}


export default store;