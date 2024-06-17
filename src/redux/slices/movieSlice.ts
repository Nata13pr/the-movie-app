import {IMovie} from "../../interfaces/IMovie";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPagination} from "../../interfaces/paginationInterface";
import {movieService} from "../../services/movie/movieService";

interface IState {
    movies: IMovie[]
}

let initialState: IState = {
    movies: []
}

const getAll = createAsyncThunk<IPagination<IMovie>, void>(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll()
            return data;
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
            })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll
}

export {
    movieActions, movieReducer
}