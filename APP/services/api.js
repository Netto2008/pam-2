import axios from "axios";
import {API_URL} from "../constanst/config";

export const api = axios.create({
    baseURL: API_URL,
});