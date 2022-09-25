import {Dispatch} from "redux";
import {addCityAC, isLoadingAC} from "../actions/actions";
import {API} from "../../api/API";


export const addCityTC = (city: string) => (dispatch: Dispatch) => {
    try {
        dispatch(isLoadingAC(true));
        API.getWeather(city).then(res => dispatch(addCityAC(res.data)))
    } catch (e) {

    } finally {
        dispatch(isLoadingAC(false));
    }
};