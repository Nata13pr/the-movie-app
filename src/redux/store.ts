import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movieSlice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
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