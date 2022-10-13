import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Card from "../Card/Card";
import {RootStateType, WeatherTypes} from "../../types/types";
import {getWeatherDays} from "../../bll/thunks/thunk";
import DailyCard from "../DailyCard/DailyCard";


const SingleCity = () => {
    const dispatch = useDispatch();

    const {city} = useParams();
    const cities = useSelector<RootStateType, WeatherTypes[]>(state => state.city.cities);
    const currentCity = cities.find(currentCity => currentCity.name === city);

    useEffect(() => {
        if (currentCity) {
            // @ts-ignore
            dispatch(getWeatherDays(currentCity.coord.lat, currentCity.coord.lat))
        }

    }, []);

    return (
        <div>
            {currentCity && <Card city={currentCity}/>}
            <DailyCard/>
        </div>
    );
};

export default SingleCity;