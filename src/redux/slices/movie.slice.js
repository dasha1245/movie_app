import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {MoviesService} from "../../services";

const initialState = {
    movies: [],
    theme: 'light',
    genres: []
};

const getAll = createAsyncThunk(
  'movieSlice/getAll',
    async (page, {rejectWithValue}) => {
      try {
          const {data} = await MoviesService.getAll(page);
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
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results
            })
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })


});

const {reducer: movieReducer, actions:{themeSwitcher}} = movieSlice;

const movieActions = {
    getAll,
    themeSwitcher,
    getAllGenres,
}

export {
    movieActions,
    movieReducer
}