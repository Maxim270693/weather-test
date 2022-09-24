import {ActionsType, InitialStateType} from "../../types/types";

export const initialState = {}

export const cityReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
};