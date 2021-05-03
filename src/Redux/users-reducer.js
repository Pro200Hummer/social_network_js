const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_USER_COUNT = "SET_USER_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 2
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
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
        default:
            return state
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setUsersCountAC = (totalUsersCount) => ({type: SET_USER_COUNT, totalUsersCount})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export default usersReducer;