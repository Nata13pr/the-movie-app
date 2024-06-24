import {IRes} from "../../types/resTypes";
import {IPagination} from "../../interfaces/paginationInterface";
import {axiosInstance} from "../index";
import {urls} from "../../constants/urls";
import {ITV} from "../../interfaces/ITV";


const tvService = {
    getAll: (page: string): IRes<IPagination<ITV>> =>
        axiosInstance.get(urls.tv.base, {params: {page: page}}),
}
export {tvService}