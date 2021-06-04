import {headerApi} from "../api/social-network-api";

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
 /* Action creators for auth-reducer */
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

/* Thunk creators for auth-reducer */
export const getAuthInfoTC = () => (dispatch) => {
    headerApi.getAuthInfo()
        .then(userData => {
            dispatch(setAuthData(userData.id, userData.login, userData.email))
        })
}


export default authReducer;