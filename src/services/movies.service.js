import {axiosInstance} from "./axios.service";
import {urls} from "../configs";




const MoviesService = {
    getAll: (page) => axiosInstance.get(`${urls.movies}?page=${page}`),
    getAllGenres: () => axiosInstance.get(urls.genres)
}

export {
    MoviesService
}