import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Card from "../Card/Card";
import {RootStateType, WeatherTypes} from "../../types/types";
import {getWeatherDays} from "../../bll/thunks/thunk";
import DailyCard from "../DailyCard/DailyCard";
import Spinner from "../Spinner/Spinner";
import './SingleCity.scss';


const SingleCity = () => {
    const dispatch = useDispatch();

    const {city} = useParams();
    const cities = useSelector<RootStateType, WeatherTypes[]>(state => state.city.cities);
    const currentCity = cities.find(currentCity => currentCity.name === city);
    const isLoading = useSelector<RootStateType, boolean>(state => state.city.isLoading);

    useEffect(() => {
        if (currentCity) {
            // @ts-ignore
            dispatch(getWeatherDays(currentCity.coord.lat, currentCity.coord.lat))
        }

    }, []);

    return (
        <div>
            <Link to='/'
                  className="link"
            >
                Go Back
            </Link>

            {
                currentCity && <Card city={currentCity}/>
            }

            {
                isLoading ? <Spinner/> : <DailyCard/>
            }
        </div>
    );
}
;

export default SingleCity;