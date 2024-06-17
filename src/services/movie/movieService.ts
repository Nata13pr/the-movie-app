import {IRes} from "../../types/resTypes";
import {IPagination} from "../../interfaces/paginationInterface";
import {IMovie} from "../../interfaces/IMovie";
import {axiosInstance} from "../index";
import {urls} from "../../constants/urls";

const movieService = {
    getAll: (): IRes<IPagination<IMovie>> => axiosInstance.get(urls.movies.base)
}
export {movieService}