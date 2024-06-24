import axios, {AxiosResponse} from "axios";

import {IConfigResponse} from "../../interfaces/IConfigResponse";
import {IPosterResponse} from "../../interfaces/IPosterResponse";

const url = 'https://api.themoviedb.org/3/configuration';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjU5ZmE1ZGVlYzAwNWI3MWE2ZjYwYzk3OTY4MmIwYSIsInN1YiI6IjY0YmI5M2Y5OWQ1OTJjMDEyNDY1YWI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZjgaHd3fe_KoUJp2yyfhnx38TmsN4f2_Jxyrfv0o0Y'
    }
};
const posterService = {
    getConfiguration: (): Promise<AxiosResponse<IConfigResponse>> =>
        axios.get<IConfigResponse>(url, options),
    getPoster: (base: string, path: string): Promise<AxiosResponse<IPosterResponse>> =>
        axios.get<IPosterResponse>(base + '/w300' + path)
}

export {
    posterService
}