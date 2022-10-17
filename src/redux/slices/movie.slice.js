import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {MoviesService} from "../../services";

const initialState = {
    movies: [],
    theme: 'light',
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


});

const {reducer: movieReducer, actions:{themeSwitcher, }} = movieSlice;

const movieActions = {
    getAll,
    themeSwitcher
}

export {
    movieActions,
    movieReducer
}