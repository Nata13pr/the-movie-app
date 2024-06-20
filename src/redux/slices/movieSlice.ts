import {IMovie} from "../../interfaces/IMovie";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPagination} from "../../interfaces/paginationInterface";
import {movieService} from "../../services/movie/movieService";
import {posterService} from "../../services/poster/posterService";
import {IConfigResponse} from "../../interfaces/IConfigResponse";

interface IState {
    movies: IMovie[],
    baseImageUrl:string,
}

let initialState: IState = {
    movies: [],
    baseImageUrl:''
}

const getAll = createAsyncThunk<IPagination<IMovie>, string>(
    'movieSlice/getAll',
    async (page:string, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page)
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

const getImageUrl=createAsyncThunk<IConfigResponse,void>(
    'movieSlice/getImageUrl',
    async (_,thunkAPI)=>{
        try{
            const {data}=await  posterService.getConfiguration();
            return thunkAPI.fulfillWithValue(data);
        }catch (e){
return  thunkAPI.rejectWithValue(e)
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
            .addCase(getAll.rejected,(state)=>{
                //
            })
            .addCase(getImageUrl.fulfilled,(state,action)=>{
                state.baseImageUrl=action.payload.images.secure_base_url;
            })
            .addCase(getImageUrl.rejected,(state)=>{
                //
            })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getImageUrl
}

export {
    movieActions, movieReducer
}