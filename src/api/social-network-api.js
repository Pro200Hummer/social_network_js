import axios from 'axios';


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "api-key": "c3ff16a4-4b9d-490a-b188-2440deac59e8"
    }
});

/* API for Users Container component */
export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    },
    pageNumberChanger(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    },
    followUser(userID) {
        return instance.post(`follow/${userID}`)
            .then(res => {
                return res.data
            })
    },
    unfollowUser(userID) {
        return instance.delete(`follow/${userID}`)
            .then(res => {
                return res.data
            })
    }
}

/* API for Profile Container component */
export const profileAPI = {
    getUser(userID) {
        return instance.get(`profile/${userID}`)
    },
}

/* API for HeaderContainer component */
export const headerApi = {
    getAuthInfo() {
    return instance.get(`auth/me`)
        .then(res => {
            return res.data.data
        })
    }
}