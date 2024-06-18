import {IGenre} from "../../interfaces/IGenre";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenreResponse} from "../../interfaces/IGenresResponse";
import {movieService} from "../../services/movie/movieService";
import {genreService} from "../../services/genre/genreService";

interface IState {
    genres: IGenre[]
}

let initialState: IState = {
    genres: []
}

const getAll = createAsyncThunk<IGenreResponse, void>(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll()
            return data;
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })

})
const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions, getAll
}
export {
    genreActions, genreReducer
}