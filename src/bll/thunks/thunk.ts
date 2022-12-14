import {Dispatch} from "redux";
import {addCityAC, editCityAC, getWeatherDaysAC, isErrorAC, isLoadingAC} from "../actions/actions";
import {API} from "../../api/API";


export const addCityTC = (city: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(isLoadingAC(true));
        const response = await API.getWeather(city)
        dispatch(addCityAC(response.data))
    } catch (e: any) {
        dispatch(isErrorAC(e.response.data.message))
    } finally {
        dispatch(isLoadingAC(false));
    }
};

export const getWeatherDays = (lat: number, lon: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(isLoadingAC(true));
        const response = await API.getWeatherForSevenDays(lat, lon);
        dispatch(getWeatherDaysAC(response.data))
    } catch (e) {

    } finally {
        dispatch(isLoadingAC(false));
    }
};

export const editCityTC = (city: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(isLoadingAC(true));
        const response = await API.getWeather(city)
        dispatch(editCityAC(response.data))
    } catch (e: any) {
        dispatch(isErrorAC(e.response.data.message))
    } finally {
        dispatch(isLoadingAC(false));
    }
};