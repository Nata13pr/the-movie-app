import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPagination} from "../../interfaces/paginationInterface";

import {ITV} from "../../interfaces/ITV";
import {tvService} from "../../services/tv/tvService";

interface IState {
    tv: ITV[],
    totalPages: number,
}

let initialState: IState = {
    tv: [],
    totalPages: 0,
}

const getAll = createAsyncThunk<IPagination<ITV>, string>(
    'tvSlice/getAll',
    async (page: string, thunkAPI) => {
        try {
            const {data} = await tvService.getAll(page)
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

const tvSlice = createSlice({
    name: 'tvSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.tv = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(getAll.rejected, (state) => {
                //
            })
})

const {reducer: tvReducer, actions} = tvSlice;

const tvActions = {
    ...actions,
    getAll,

}

export {
    tvActions, tvReducer
}