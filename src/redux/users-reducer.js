import {usersApi} from "../api/social-network-api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_USER_COUNT = "SET_USER_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOGGLE_LOADING = "TOGGLE_LOADING"


let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    isLoading: false,
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_USER_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

/* Action creators for users-reducer */
export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setUsersCount = (totalUsersCount) => ({type: SET_USER_COUNT, totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleLoading = (isLoading) => ({type: TOGGLE_LOADING, isLoading});

/* Thunk creators for users-reducer */
export const getUsersTC = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleLoading(true));
    usersApi.getUsers(currentPage, pageSize)
        .then(data => {
            debugger
            dispatch(toggleLoading(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersCount(data.totalCount));
        })
}
export const changePageNumberTC = (pageNumber, pageSize) => (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleLoading(true));
    usersApi.pageNumberChanger(pageNumber, pageSize)
        .then(data => {
            dispatch(toggleLoading(false));
            dispatch(setUsers(data.items));
        })
}

export const followingTC = (userID) => (dispatch) => {
    usersApi.followUser(userID)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userID))
            }
            if (data.resultCode === 1) {
                alert(data.messages[0])
            }
        })
}

export const unfollowingTC = (userID) => (dispatch) => {
    usersApi.unfollowUser(userID)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userID))
            }
            if (data.resultCode === 1) {
                alert(data.messages[0])
            }
        })
}


export default usersReducer;