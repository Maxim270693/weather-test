import {Dispatch} from "redux";
import {addCityAC, editCityAC, isErrorAC, isLoadingAC} from "../actions/actions";
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