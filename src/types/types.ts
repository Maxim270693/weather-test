import {initialState} from "../bll/reducer/cityReducer";
import {rootReducer} from "../bll/store/store";
import {
    addCityAC,
    getWeatherDaysAC,
    currentPageAC,
    editCityAC,
    inputValueAC,
    isErrorAC,
    isLoadingAC,
    removeCityAC,
    updateCityAC
} from "../bll/actions/actions";

// type initialState
export type InitialStateType = typeof initialState;

// type store
export type RootStateType = ReturnType<typeof rootReducer>;

// type ActionsType
export type ActionsType =
    AddCityActionType
    | GetWeatherDaysACActionType
    | RemoveCityActionType
    | IsLoadingActionType
    | InputValueActionType
    | EditCityActionType
    | UpdateCityActionType
    | IsErrorActionType
    | CurrentPageActionType

export type AddCityActionType = ReturnType<typeof addCityAC>;
export type GetWeatherDaysACActionType = ReturnType<typeof getWeatherDaysAC>;
export type RemoveCityActionType = ReturnType<typeof removeCityAC>;
export type IsLoadingActionType = ReturnType<typeof isLoadingAC>;
export type IsErrorActionType = ReturnType<typeof isErrorAC>
export type InputValueActionType = ReturnType<typeof inputValueAC>;
export type EditCityActionType = ReturnType<typeof editCityAC>;
export type UpdateCityActionType = ReturnType<typeof updateCityAC>;
export type CurrentPageActionType = ReturnType<typeof currentPageAC>;

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

export type WeatherDaysType = {
    current: CurrentType,
    daily: DailyType[],
    hourly: HourlyType[],
    lat: number,
    lon: number,
    minutely: MinutelyType[],
    timezone: string,
    timezone_offset: number,
}

export type CurrentType = {
    clouds: number,
    dew_point: number,
    dt: number,
    feels_like: number,
    humidity: number,
    pressure: number,
    sunrise: number,
    sunset: number,
    temp: number,
    uvi: number,
    visibility: number,
    weather: WeatherType[],
    wind_deg: number,
    wind_gust: number,
    wind_speed: number,
}

export type DailyType = {
    clouds: number,
    dew_point: number,
    dt: number,
    feels_like: {day: 282.65, night: 279.05, eve: 282.2, morn: 277.92}
    humidity: number,
    moon_phase: number,
    moonrise: number,
    moonset: number,
    pop: number,
    pressure: number,
    sunrise: number,
    sunset: number,
    temp: {day: 283.08, min: 277.93, max: 283.33, night: 279.05, eve: 282.2,morn: 278.99},
    uvi: number,
    weather: WeatherType[],
    wind_deg: number,
    wind_gust: number,
    wind_speed: number,
}

export type HourlyType = {
    clouds: number,
    dew_point: number,
    dt: number,
    feels_like: number,
    humidity: number,
    pop: number,
    pressure: number,
    temp: number,
    uvi: number,
    visibility: number,
    weather: WeatherType[],
    wind_deg: number,
    wind_gust: number,
    wind_speed: number,
}

export type MinutelyType = {
    dt: number,
    precipitation: number,
}