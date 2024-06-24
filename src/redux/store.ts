import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movieSlice";
import {tvReducer} from "./slices/tvSlice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
        tv:tvReducer,
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export {
    store
}

export type{
    RootState,
    AppDispatch
}