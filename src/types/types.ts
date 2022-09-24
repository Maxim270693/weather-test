import {initialState} from "../bll/reducer/cityReducer";
import {rootReducer} from "../bll/store/store";

// type initialState
export type InitialStateType = typeof initialState;

// type store
export type RootStateType = ReturnType<typeof rootReducer>;

// type ActionsType
export type ActionsType = any