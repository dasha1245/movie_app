import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const MoviesService = {
    getAll: () => axiosInstance.get(urls.movies)
}

export {
    MoviesService
}