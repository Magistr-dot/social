import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "0d84092c-4446-4824-9d15-19d371343980"}
})


export const profileAPI = {

    getProfile(id = 2) {
        return instance.get(`profile/` + id)

    },
    getStatus (id) {
        return instance.get('profile/status/' + id)
    },
    updateStatus (status) {
        return instance.put('profile/status', {status: status})
    }
}


export const userAPI = {

    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(id = 2) {
        return instance.delete(`follow/${id}`
        ).then(response => {
            return response.data
        })
    },
    follow(id = 2) {

        return instance.post(`follow/${id}`
        ).then(response => {
            return response.data
        })
    },
    getProfile(id = 2) {
        console.warn('Obsolete method')
        return profileAPI.getProfile(id)

    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }

}