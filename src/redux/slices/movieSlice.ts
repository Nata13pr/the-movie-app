import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces/IMovie";
import {IPagination} from "../../interfaces/paginationInterface";
import {movieService} from "../../services/movie/movieService";
import {posterService} from "../../services/poster/posterService";
import {IConfigResponse} from "../../interfaces/IConfigResponse";
import {IGenreResponse} from "../../interfaces/IGenresResponse";
import {genreService} from "../../services/genre/genreService";
import {IGenre} from "../../interfaces/IGenre";

interface IState {
    movies: IMovie[],
    movie: IMovie | null,
    baseImageUrl: string,
    filteredMovie: IMovie[],
    totalPages: number,
    genres: IGenre[],
    movieFoundByTitle: IMovie[],
    switcher: boolean,
}

let initialState: IState = {
    movies: [],
    baseImageUrl: '',
    movie: null,
    filteredMovie: [],
    totalPages: 0,
    genres: [],
    movieFoundByTitle: [],
    switcher: false

}
const getAllGenres = createAsyncThunk<IGenreResponse, void>(
    'movieSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll()
            return data;
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const getByTitle = createAsyncThunk<IPagination<IMovie>, string>(
    'movieSlice/getByTitle',
    async (query: string, thunkAPI) => {
        try {
            const {data} = await movieService.getByTitle(query);
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue(e);
        }
    }
);

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

const getAllByGenre = createAsyncThunk<IPagination<IMovie>, { id: string, page: string }>(
    'movieSlice/getAllByGenre',
    async ({id, page}, thunkAPI) => {
        try {
            const {data} = await movieService.getMoviesByGenre(id, page);
            return thunkAPI.fulfillWithValue(data)
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
const getMovieById = createAsyncThunk<IMovie, string>(
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
        toggleSwitcher: (state) => {
            state.switcher = !state.switcher;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
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
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movie = action.payload;
            })
            .addCase(getMovieById.rejected, (state) => {
                //
            })
            .addCase(getAllByGenre.fulfilled, (state, action) => {
                state.filteredMovie = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(getAllByGenre.rejected, (state) => {
                //
            })
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })
            .addCase(getAllGenres.rejected, (state) => {
                //
            })
            .addCase(getByTitle.fulfilled, (state, action) => {
                state.movieFoundByTitle = action.payload.results;
                state.totalPages = action.payload.total_pages
            })
            .addCase(getByTitle.rejected, (state) => {
                //
            })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getImageUrl,
    getMovieById,
    getAllByGenre,
    getAllGenres,
    getByTitle
}

export {
    movieActions, movieReducer
}