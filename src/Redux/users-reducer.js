import userAvatar from "../resources/images/user-avatar.png"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

let initialState = {
    users: [
        {
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
        },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

const followAC = () => ({type: FOLLOW})
const unfollowAC = () => ({type: UNFOLLOW})

export default usersReducer;