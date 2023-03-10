import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY':'fa581bb0-f0d0-4605-ab39-1ed1a1589a08'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const profileAPI = {
    getUserProfile(userId){
        return instance.get(`profile/${userId}`).then(response => response.data)
    },

    getStatus(userId){
        return instance.get(`profile/status/${userId}`).then(response => response.data )
    },

    updateStatus(status){
        return instance.put(`profile/status`, {
            status: status
        }).then(response => {
            return response.data
        })
    }
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}
        &count=${pageSize}`).then(response => response.data)
    },
//TODO: backward compatibility
    getUserProfile(userId){
        console.log('its method is deprecated. Pls use profileAPI.getUserProfile')
        return profileAPI.getUserProfile(userId)
    },

    follow(userId){
        return instance.post(`follow/${userId}`, {}).then(response => response.data)
    },

    unfollow(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const authAPI = {
    getAuthData(){
        return instance.get(`auth/me`,
        ).then(response => response.data)
    },
    login(email, password, rememberMe = false, captchaTxt){
        let captcha = captchaTxt
        return instance.post('auth/login', {email, password, rememberMe, captcha}).then(res => res.data)
    },
    logout(login, password, rememberMe = false) {
        return instance.delete('auth/login').then(res => res.data)
    },
    getCaptcha(){
        return instance.delete('/security/get-captcha-url').then(res => res.data)
    }
}
