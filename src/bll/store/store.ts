import {applyMiddleware, combineReducers, createStore} from "redux";
import {cityReducer} from "../reducer/cityReducer";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    city: cityReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));