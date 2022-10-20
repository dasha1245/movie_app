import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {MoviesService} from "../../services";

const initialState = {
    movies: [],
    movie: null,
    theme: 'light',
    genres: [],
    selectedGenre: [],
    currentPage:1,
    totalPages: 0,
    searchParams: '',
    showGenre: false
};

const getAll = createAsyncThunk(
  'movieSlice/getAll',
    async ({currentPage}, {rejectWithValue}) => {
      try {
          const {data} = await MoviesService.getAll(currentPage);
          return data;
      } catch (e) {
            rejectWithValue(e.response.data)
      }
    }
);

const getAllGenres = createAsyncThunk(
    'movieSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await MoviesService.getAllGenres();
            return data.genres
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
);

const getWithGenres = createAsyncThunk(
    'movieSlice/getWithGenres',
    async ({currentPage, selectedGenre}, {rejectWithValue}) => {
        try {
            const {data} = await MoviesService.getWithGenres(currentPage,selectedGenre);
            return data
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
)

const getSearchedFilms = createAsyncThunk(
    'movieSlice/getSearchedFilms',
    async ({searchParams, currentPage}, {rejectWithValue}) => {
        try {
            const {data} = await MoviesService.searchMovies(searchParams, currentPage);
            return data
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
);

const getMovieById = createAsyncThunk(
    'movieSlice/getMovieById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await MoviesService.getMovieById(id);
            return data
        } catch (e) {

        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        themeSwitcher: (state, action) => {
            if (state.theme === "light"){
                state.theme = 'dark'
            } else {
                state.theme = 'light'
            }
        },
        setSearchParams: (state, action) => {
            state.searchParams = action.payload
        },
        setCurrentPage: (state,action) => {
            state.currentPage = action.payload
        },
        setGenre: (state, action) => {
            state.selectedGenre.push(action.payload)
        },
        discardGenres: (state, action) => {
            let indexGenreToDelete = state.selectedGenre.findIndex(elem => elem === action.payload)
            state.selectedGenre.splice(indexGenreToDelete, 1);

        },
        showGenres: (state, action) => {
            state.showGenre = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.totalPages = action.payload.total_pages
                state.movies = action.payload.results
            })
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getSearchedFilms.fulfilled, (state, action) => {
                state.totalPages = action.payload.total_pages
                state.movies = action.payload.results
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movie = action.payload
            })
            .addCase(getWithGenres.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.totalPages = action.payload.total_pages
            })


});

const {reducer: movieReducer, actions:{
    themeSwitcher,
    setSearchParams,
    setCurrentPage,
    setGenre,
    discardGenres,
    showGenres}} = movieSlice;

const movieActions = {
    getAll,
    themeSwitcher,
    getAllGenres,
    getSearchedFilms,
    getMovieById,
    setSearchParams,
    setCurrentPage,
    setGenre,
    getWithGenres,
    discardGenres,
    showGenres
}

export {
    movieActions,
    movieReducer
}