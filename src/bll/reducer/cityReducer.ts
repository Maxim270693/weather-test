import {ActionsType, InitialStateType, WeatherTypes} from "../../types/types";
import {
    ADD_CITY,
    EDIT_CITY,
    INPUT_VALUE,
    IS_LOADING,
    REMOVE_CITY, UPDATE_CITI
} from "../../constants/constants";

export const initialState = {
    cities: [] as WeatherTypes[],
    isLoading: false,
    inputValue: '',
    editCity: '',
}

export const cityReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_CITY:
            return {...state, cities: [...state.cities, action.payload], inputValue: ''}
        case REMOVE_CITY:
            return {
                ...state,
                cities: state.cities.filter(city => city.id !== action.payload),
                inputValue: '',
                editCity: '',
            }
        case IS_LOADING:
            return {...state, isLoading: action.payload}
        case INPUT_VALUE:
            return {...state, inputValue: action.payload}
        case UPDATE_CITI:
            return {
                ...state,
                inputValue: action.payload,
                editCity: action.payload,
            }
        case EDIT_CITY:
            const newArray = state.cities.map(item => {
                return item.name === state.editCity
                    ? action.payload
                    : item
            })
            
            return {
                ...state,
                cities: newArray,
                inputValue: '',
                editCity: '',
            }
        default:
            return state;
    }
};