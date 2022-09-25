import {ADD_CITY, INPUT_VALUE, IS_LOADING} from "../../constants/constants";
import {WeatherTypes} from "../../types/types";


export const addCityAC = (payload: WeatherTypes) => ({type: ADD_CITY, payload} as const);
export const isLoadingAC = (payload: boolean) => ({type: IS_LOADING, payload} as const);
export const inputValueAC = (payload: string) => ({type: INPUT_VALUE, payload} as const);