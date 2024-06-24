import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "../layouts/main/MainLayout";
import ErrorLayout from "../layouts/error/ErrorLayout";
import MoviesPage from "../pages/movie/MoviesPage";
import TvShowPage from "../pages/tvshow/TVShowPage";
import CardPage from "../pages/card/CardPage";
import MovieByGenrePage from "../pages/movieByGenre/MovieByGenrePage";
import MoviesByTitlePage from "../pages/moviesByTitle/MoviesByTitlePage";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'movies/:id', element: <CardPage/>},
            {path: 'movies/genre/:id', element: <MovieByGenrePage/>},
            {path: 'movies/search/:title', element: <MoviesByTitlePage/>},
            {path: 'tv-show', element: <TvShowPage/>},
        ]
    }
])

export {
    router
}