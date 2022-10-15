import axios from "axios";

import {baseURL} from "../configs";

const axiosInstance = axios.create({baseURL});


axiosInstance.interceptors.request.use((config) => {
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjYyN2M5ZmNkZDlkM2JmZjdlYmI2YWZiZTNkYzA1NSIsInN1YiI6IjYzNDliZjZjMDcyMTY2MDA4ZGNhODA4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OY1qozJoI43qdMxEnfv12T0xT8wdGPWjKDqi0VYiexg'
    if (accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})
export {
    axiosInstance
}