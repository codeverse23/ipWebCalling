import axios from "axios";

export const BASE_URl = "http://16.170.215.79:9000/api/v1/"

const DataService = axios.create({
    baseURL : BASE_URl
})

DataService.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
},
(error)=>{
    return Promise.reject(error)
}

)

export default DataService