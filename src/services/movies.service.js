import {axiosInstance} from "./axios.service";
import {urls} from "../configs";




const MoviesService = {
    getAll: (page) => axiosInstance.get(`${urls.movies}?page=${page}`),
    getAllGenres: () => axiosInstance.get(urls.genres),
    searchMovies: (query, page) => axiosInstance.get(`${urls.search}?&page=${page}&query=${query}`),
    getMovieById: (id) => axiosInstance.get(`${urls.movieById}/${id}`),
    getWithGenres: (page, genres) => axiosInstance.get(`${urls.movies}?&page=${page}&with_genres=${genres}`)
}

export {
    MoviesService
}