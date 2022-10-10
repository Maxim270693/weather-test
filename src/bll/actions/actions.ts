import {
    ADD_CITY,
    EDIT_CITY,
    INPUT_VALUE,
    IS_LOADING,
    REMOVE_CITY, UPDATE_CITI
} from "../../constants/constants";
import {WeatherTypes} from "../../types/types";


export const addCityAC = (payload: WeatherTypes) => ({type: ADD_CITY, payload} as const);
export const removeCityAC = (payload: number) => ({type: REMOVE_CITY, payload} as const);
export const isLoadingAC = (payload: boolean) => ({type: IS_LOADING, payload} as const);
export const inputValueAC = (payload: string) => ({type: INPUT_VALUE, payload} as const);
export const editCityAC = (payload: WeatherTypes) => ({type: EDIT_CITY, payload} as const);
export const updateCityAC = (payload: string) => ({type: UPDATE_CITI, payload} as const);