import * as axios from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b05fd2ad-b039-4e05-bbc7-dfcad75c2669'
    }
});

export const requestApi = {
    getUsers(currentPage, pageSize) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    authMe() {
        return axiosInstance.get(`auth/me`).then(response => response.data);
    },
    followRequest(userId) {
        return axiosInstance.post(`follow/${userId}`, null)
            .then(response => response.data);
    },
    unfollowRequest(userId) {
        return axiosInstance.delete(`follow/${userId}`)
            .then(response => response.data);
    }
}