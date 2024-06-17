import axios from "axios";
import {baseURL} from "../constants/urls";
import {api} from "../constants/api";

export const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    }
})

axiosInstance.interceptors.request.use(request => {
    request.headers.set('Authorization', 'Bearer' + ' ' + api);
    return request;
})