import axios from 'axios';


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers:{
        "api-key": "c3ff16a4-4b9d-490a-b188-2440deac59e8"
    }
});

export const profileAPI = {
    getUser(userID){
        return instance.get(`profile/${userID}`)
    },
}