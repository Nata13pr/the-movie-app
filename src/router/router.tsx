import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../layouts/main/MainLayout";
import ErrorLayout from "../layouts/error/ErrorLayout";
import MoviesPage from "../pages/movie/MoviesPage";
import TvShowPage from "../pages/tvshow/TVShowPage";
import CardPage from "../pages/card/CardPage";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            {path:'movies/:id',element:<CardPage/>},
            {path: 'tvshow', element: <TvShowPage/>}
        ]
    }

])

export {
    router
}