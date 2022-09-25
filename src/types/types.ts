import {initialState} from "../bll/reducer/cityReducer";
import {rootReducer} from "../bll/store/store";

// type initialState
export type InitialStateType = typeof initialState;

// type store
export type RootStateType = ReturnType<typeof rootReducer>;

// type ActionsType
export type ActionsType = any

// weather response
export type WeatherType = {
    description: string,
    icon: string,
    id: number,
    main: string,
}

export type WeatherTypes = {
    base: string,
    clouds: {
        all: number,
    },
    cod: number,
    coord: {
        lat: number,
        lon: number,
    },
    dt: number,
    id: number,
    main: {
        feels_like: number,
        grnd_level: number,
        humidity: number,
        pressure: number,
        sea_level: number,
        temp: number,
        temp_max: number,
        temp_min: number,
    },
    name: string,
    sys: {
        country: string,
        sunrise: number,
        sunset: number,
    },
    weather: WeatherType[],
    timezone: number,
    visibility: number,
    wind: {
        deg: number,
        gust: number,
        speed: number,
    },
    message: string;
}