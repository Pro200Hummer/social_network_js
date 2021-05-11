const ADD_NEW_POST = "ADD_NEW_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"


let initialState = {
    posts: [
        {id: 1, post: "Hi, how are you?", likeCounts: 21},
        {id: 2, post: "It's my first post", likeCounts: 13},
    ],
    newPostText: "",
    profile: null,
}


const profileReducer = (state = initialState, action) => {
    debugger
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
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}
export const newPostCreator = () => ({type: ADD_NEW_POST})

export const updateNewPostTextCreator = (postText) => ({type: UPDATE_NEW_POST_TEXT, postText})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;