import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store