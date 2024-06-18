import {IGenreResponse} from "../../interfaces/IGenresResponse";
import {IRes} from "../../types/resTypes";
import {axiosInstance} from "../index";
import {urls} from "../../constants/urls";

const genreService = {
    getAll: (): IRes<IGenreResponse> => axiosInstance.get(urls.genres.base)
}

export {genreService}

