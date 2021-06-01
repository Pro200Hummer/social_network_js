const SEND_NEW_MESSAGE = "SEND_NEW_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

let initialState = {
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
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            }
            return {...state, messages: [...state.messages, newMessage], newMessageText: ""}
        case UPDATE_NEW_MESSAGE:
            return {...state, newMessageText: action.messageText}

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({
    type: SEND_NEW_MESSAGE,
})
export const updateNewMessageCreator = (message) => ({
    type: UPDATE_NEW_MESSAGE,
    messageText: message,
})

export default messageReducer;