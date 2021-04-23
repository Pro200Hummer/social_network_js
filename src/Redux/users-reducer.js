import userAvatar from "../resources/images/user-avatar.png"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

let initialState = {
    users: [
       /* {
            id: 1,
            firstName: "Pavel",
            lastName: "Nickolaichik",
            location: {
                country: "Belarus",
                city: "Minsk"
            },
            status: "I'm looking for a job right now",
            avatar: userAvatar,
            followed: true
        },
        {
            id: 2,
            firstName: "Natali",
            lastName: "Nickolaichik",
            location: {
                country: "Belarus",
                city: "Minsk"
            },
            status: "I'm zaebalas uzhe",
            avatar: userAvatar,
            followed: true
        },
        {
            id: 3,
            firstName: "Monya",
            lastName: "Nickolaichik",
            location: {
                country: "Belarus",
                city: "Minsk"
            },
            status: "meoooow",
            avatar: userAvatar,
            followed: false
        },
        {
            id: 4,
            firstName: "Frosya",
            lastName: "Nickolaichik",
            location: {
                country: "Belarus",
                city: "Minsk"
            },
            status: "I will demolish the whole apartment",
            avatar: userAvatar,
            followed: false
        },*/
    ]
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
            return {...state, users: [...state.users, action.users]}

        default:
            return state
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;