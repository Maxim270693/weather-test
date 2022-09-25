import React from 'react';
import './card.scss';
import {WeatherTypes} from "../../types/types";

type PropsType = {
    city: WeatherTypes,
}

const Card = ({city}: PropsType) => {

    return (
        <div className="card">
            <div className="mainInfo">
                <img src={`http://openweathermap.org/img/wn/${city.weather?.[0].icon}@2x.png`}
                     className="icon"/>
                <div className="title">{city.name}</div>
                <div className="description">{city?.weather?.[0].description}</div>
                <div className="temperature">{city.main?.temp.toFixed()}</div>
            </div>
            <div className="information">
                <div>Humidity: {city.main?.humidity}</div>
                <div>Feels
                    like: {city && city.main && city.main.feels_like}</div>
            </div>
        </div>
    );
};

export default Card;