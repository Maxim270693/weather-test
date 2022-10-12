import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";
import Card from "../Card/Card";
import {RootStateType, WeatherTypes} from "../../types/types";


const SingleCity = () => {
    const {city} = useParams();
    const cities = useSelector<RootStateType, WeatherTypes[]>(state => state.city.cities);
    const currentCity = cities.find(currentCity => currentCity.name === city);

    return (
        <div>
            {currentCity && <Card city={currentCity}/>}
        </div>
    );
};

export default SingleCity;