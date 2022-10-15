import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {MoviesService} from "../../services";

const initialState = {
    movies: []
};

const getAll = createAsyncThunk(
  'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
      try {
          const {data} = await MoviesService.getAll();
          return data.results;
      } catch (e) {
            rejectWithValue(e.response.data)
      }
    }
);



const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
            })


});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAll
}

export {
    movieActions,
    movieReducer
}