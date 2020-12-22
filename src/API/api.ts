import axios from 'axios'
import {PhotosType, ProfileType, UsersType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "dfd7eb2d-9c66-4378-bc1d-1e95001f1dd9"
    }
})

// usersAPI type
type GetUsersType = {
    items: UsersType
    totalCount: number
    error: string
}
type FollowUnfollowType = {
    data: UsersType
    resultCode: number
    messages: Array<string>
}

// profileAPI type
type GetStatusType = {
    status: string
}
type UpdateStatusType = {
    status: string
    resultCode: number
    messages: Array<string>
}
type SavePhotoType = {
    photos: PhotosType
    resultCode: number
    messages: Array<string>
}

// authAPI type
type AuthApiType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
    resultCode: number
    messages: Array<string>
}
type LoginType = {
    data: {
        email: string | null
        password: string | null
        rememberMe: boolean | null
    }
    resultCode: number
    messages: Array<string>
}
type LogoutType = {
    data: {
        id: number | null
        email: string | null
        password: string | null
        rememberMe: boolean | null
    }
    resultCode: number
    messages: Array<string>
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data});//мы возвращаем не то, что нам вернул get-запрос,
        //а then, только то, что нам нужно(данные о пользователях)
    },
    unfollow(id: number) {
        return instance.delete<FollowUnfollowType>(`follow/${id}`)
            .then(res => {
                return res.data;
            })
    },
    follow(id: number) {
        return instance.post<FollowUnfollowType>(`follow/${id}`)
            .then(res => {
                return res.data;
            })
    },
    /*getProfile(userId) {
        console.warn("Obsolute method. Please use profileAPI.getProfile");
        return profileAPI.getProfile(userId);
    }*/
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(res => {
                return res.data});
    },
    getStatus(userId: number) {
        return instance.get<GetStatusType>(`profile/status/${userId}`)
            .then(res => {
                return res.data});
    },
    updateStatus(status: string) {
        return instance.put<UpdateStatusType>(`profile/status`, {status: status})
            .then(res => {
                return res.data});
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append("image", photoFile[0]);
        return instance.put<SavePhotoType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                return res.data
            })
    }
}
export const authAPI = {
    getAuthMe() {
        return instance.get<AuthApiType>(`auth/me`)
            .then(res => {
                return res.data
            })
    },

    login(email: string | null, password: string | null, rememberMe = false) {
        return instance.post<LoginType>(`auth/login`, {email, password, rememberMe})
            .then(res => {
                return res.data
            })
    },
    logout() {
        return instance.delete<LogoutType>(`auth/login`)
            .then(res => {
                return res.data
            })
    }
}


