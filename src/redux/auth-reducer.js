import Users from "../components/Users/Users";

const SET_AUTH_DATA = "SET_AUTH_DATA"


let initialState = {
    userData: {
        id: null,
        login: null,
        email: null,
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {...state, userData: action.userData}
        default:
            return state
    }
}

export const setAuthData = (id, login, email) => {
    return {
        type: SET_AUTH_DATA,
        userData: {
            id,
            login,
            email
        }
    }
}

export default authReducer;