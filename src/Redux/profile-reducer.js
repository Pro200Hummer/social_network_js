const ADD_NEW_POST = "ADD_NEW_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"


let initialState = {
    posts: [
        {id: 1, post: "Hi, how are you?", likeCounts: 21},
        {id: 2, post: "It's my first post", likeCounts: 13},
    ],
    newPostText: "",
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: 3,
                post: state.newPostText,
                likeCounts: 0,
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ""};
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.postText}
        default:
            return state
    }
}
export const newPostCreator = () => ({
    type: ADD_NEW_POST,
})
export const updateNewPostTextCreator = (postText) => ({
    type: UPDATE_NEW_POST_TEXT,
    postText: postText,
})
export default profileReducer;