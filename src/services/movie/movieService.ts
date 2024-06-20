import {IRes} from "../../types/resTypes";
import {IPagination} from "../../interfaces/paginationInterface";
import {IMovie} from "../../interfaces/IMovie";
import {axiosInstance} from "../index";
import {urls} from "../../constants/urls";

const movieService = {
    getAll: (page: string): IRes<IPagination<IMovie>> => axiosInstance.get(urls.movies.base, {params: {page: page}}),
    getById: (id: string): IRes<IMovie> =>  axiosInstance.get<IMovie>(urls.findById.base + '/'+id)

}
export {movieService}