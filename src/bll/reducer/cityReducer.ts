import {ActionsType, InitialStateType, WeatherTypes} from "../../types/types";
import {ADD_CITY, INPUT_VALUE, IS_LOADING, REMOVE_CITY} from "../../constants/constants";

export const initialState = {
    cities: [] as WeatherTypes[],
    isLoading: false,
    inputValue: '',
}

export const cityReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_CITY:
            return {...state, cities: [...state.cities, action.payload], inputValue: ''}
        case REMOVE_CITY:
            return {...state, cities: state.cities.filter(city => city.id !== action.payload)}
        case IS_LOADING:
            return {...state, isLoading: action.payload}
        case INPUT_VALUE:
            return {...state, inputValue: action.payload}
        default:
            return state;
    }
};