import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "dfd7eb2d-9c66-4378-bc1d-1e95001f1dd9"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data});//мы возвращаем не то, что нам вернул get-запрос,
        //а then, только то , что нам нужно(данные о пользователях)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    /*getProfile(userId) {
        console.warn("Obsolute method. Please use profileAPI.getProfile");
        return profileAPI.getProfile(userId);
    }*/
};
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data});
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data});
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => {
                return response.data});
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile[0]);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    //         .then(response => {
    //             return response.data});
    }
};
export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    }
};


