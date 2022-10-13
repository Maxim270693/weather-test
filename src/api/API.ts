import axios from "axios";
import {WeatherDaysType, WeatherTypes} from "../types/types";

const API_key = '430f4135c55d99ceee29921a087daf36';

export const API = {
    getWeather(city: string) {
        return axios.get<WeatherTypes>(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
    },
    getWeatherForSevenDays(lat: number, lon: number) {
        return axios.get<WeatherDaysType>(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`)
    },
}