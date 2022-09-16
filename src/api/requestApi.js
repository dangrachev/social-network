import * as axios from 'axios';

/*
bunnykilljoy@mail.ru
vekmnzirfSamurai

testsocialntwrk@mail.ru
1234567890_Test
*/

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b05fd2ad-b039-4e05-bbc7-dfcad75c2669' /*'0eb49db5-9ece-4db5-99fd-2e449130c801'*/
    }
});


export const usersApi = {
    getUsers(currentPage, pageSize) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followRequest(userId) {
        return axiosInstance.post(`follow/${userId}`, null)
            .then(response => response.data);
    },
    unfollowRequest(userId) {
        return axiosInstance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
    getProfile(userId) {
        console.warn('Obsolete method. Use profileApi.getProfile');
        return profileApi.getProfile(userId)
            .then(response => response.data);
    }
}

export const profileApi = {
    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        return axiosInstance.put(`profile/status/`, {status: status});
    },
    updatePhoto(photoFile) {
        const formData = new FormData();
        formData.set('image', photoFile);
        return axiosInstance.put(`profile/photo`, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
    },
    updateProfileData(profileData) {
        return axiosInstance.put(`profile`, profileData);
    }
}

export const authApi = {
    me() {
        return axiosInstance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return axiosInstance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return axiosInstance.delete(`auth/login`);
    }
}

export const chatApi = {
    getAllDialogs() {
      return axiosInstance.get(`dialogs`);
    },
    startChatting(userId) {
        return axiosInstance.put(`dialogs/${userId}`);
    },
    getMessages(userId, page, count) {
        return axiosInstance.get(`dialogs/${userId}/messages`);
    },
    getNewMessagesCount() {
        return axiosInstance.get('dialogs/messages/new/count');
    },
    sendMessage(userId, body) {
        return axiosInstance.post(`dialogs/${userId}/messages`, {body});
    },
    deleteMessage(messageId) {
        return axiosInstance.delete(`dialogs/messages/${messageId}`);
    }
}

export const securityApi = {
    getCaptcha() {
        return axiosInstance.get(`security/get-captcha-url`);
    }
}
