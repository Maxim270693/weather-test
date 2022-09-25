import axios from "axios";
import {WeatherTypes} from "../types/types";

const API_key = '430f4135c55d99ceee29921a087daf36';

export const API = {
    getWeather(city: string) {
        return axios.get<WeatherTypes>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
    }
}