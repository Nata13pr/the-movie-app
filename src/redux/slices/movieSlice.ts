import {IMovie} from "../../interfaces/IMovie";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPagination} from "../../interfaces/paginationInterface";
import {movieService} from "../../services/movie/movieService";
import {posterService} from "../../services/poster/posterService";
import {IConfigResponse} from "../../interfaces/IConfigResponse";

interface IState {
    movies: IMovie[],
    filteredMovies: IMovie[],
    movie:IMovie | null,
    baseImageUrl: string,
}

let initialState: IState = {
    movies: [],
    filteredMovies: [],
    baseImageUrl: '',
    movie:null
    //     {
    //     adult: false,
    //     backdrop_path: 'string',
    //     genre_ids: [],
    //     id: 0,
    //     original_language: 'string',
    //     original_title: 'string',
    //     overview: 'string',
    //     popularity: 0,
    //     poster_path: 'string',
    //     release_date: 'string',
    //     title: 'string',
    //     video: false,
    //     vote_average: 0,
    //     vote_count: 0
    // },
}

const getAll = createAsyncThunk<IPagination<IMovie>, string>(
    'movieSlice/getAll',
    async (page: string, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page)
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

const getImageUrl = createAsyncThunk<IConfigResponse, void>(
    'movieSlice/getImageUrl',
    async (_, thunkAPI) => {
        try {
            const {data} = await posterService.getConfiguration();
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)
const getMovieById = createAsyncThunk(
    'movieSlice/getMovieById',
    async (id: string, thunkAPI) => {
        try {
            const data = await movieService.getById(id);

            return thunkAPI.fulfillWithValue(data.data)
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)
const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        filterMoviesByGenre: (state, action: PayloadAction<string>) => {
            if (action.payload === 'All') {
                state.filteredMovies = state.movies;
            } else {
                state.filteredMovies = state.movies.filter(movie =>
                    movie.genres && movie.genres.some(genre => genre.name === action.payload)
                );
            }
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
            })
            .addCase(getAll.rejected, (state) => {
                //
            })

            .addCase(getImageUrl.fulfilled, (state, action) => {
                state.baseImageUrl = action.payload.images.secure_base_url;

            })
            .addCase(getImageUrl.rejected, (state) => {
                //
            })
            .addCase(getMovieById.fulfilled,(state,action)=>{
                state.movie=action.payload;
            })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getImageUrl,
    getMovieById
}

export {
    movieActions, movieReducer
}