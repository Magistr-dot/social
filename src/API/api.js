import axios from "axios";


const instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY":"0d84092c-4446-4824-9d15-19d371343980"}
})


export const userAPI = {

    getUsers (currentPage = 1, pageSize = 5)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unfollow (id = 2)  {
        return instance.delete(`follow/${id}`
        ).then(response => {
            return response.data
        })
    }
}