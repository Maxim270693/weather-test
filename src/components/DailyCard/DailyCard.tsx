import React from 'react';
import './DailyCard.scss';
import {useSelector} from "react-redux";
import {RootStateType, WeatherDaysType} from "../../types/types";

const DailyCard = () => {
    const weatherDays = useSelector<RootStateType, WeatherDaysType>(state => state.city.weatherDays);

    return (
        <div className="cardWrapper">
            {weatherDays?.daily?.map(item => {
                const {dt, weather, temp} = item;
                const currentDay = new Date(dt * 1000);

                return (
                    <div className="dailyCard">
                        <div>{currentDay.toString().split(' ')[0]}</div>
                        <img
                            src={`http://openweathermap.org/img/wn/${weather?.[0].icon}@2x.png`}
                            className="icon"/>
                        <div>{weather?.[0].description}</div>
                        <div className="dailyTemp">{temp?.day.toFixed()}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default DailyCard;