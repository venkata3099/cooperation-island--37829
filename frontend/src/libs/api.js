import axios from "axios";
import { toast } from "react-toastify";

let API = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

API.interceptors.request.use((config) => {
    const token = localStorage["AccessToken"];
    config.headers.Authorization = "Bearer " + token;

    return config;
});

API.interceptors.response.use(null, (error) => {
    toast.error(error.message);

    return Promise.reject(error);
});

export default API;
