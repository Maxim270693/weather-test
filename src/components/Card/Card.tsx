import React, {MouseEvent} from 'react';
import './card.scss';
import {WeatherTypes} from "../../types/types";
import {useDispatch} from "react-redux";
import {removeCityAC, updateCityAC} from "../../bll/actions/actions";
import {Link, useLocation, useNavigate} from 'react-router-dom';

type PropsType = {
    city: WeatherTypes,
}

const Card = ({city}: PropsType) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const onDeleteCityHandler = (id: number) => {
        dispatch(removeCityAC(id))
        navigate('/');
    }

    const onEditHandler = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(updateCityAC(city.name))
        navigate('/');
    }

    const onDeleteHandler = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onDeleteCityHandler(city.id);
    }

    const renderCard = () => {
        return <>
            <div className="deleteCard">
                <button className="editBtn btn"
                        onClick={onEditHandler}
                >
                    edit
                </button>
                <button className="deleteBtn btn"
                        onClick={onDeleteHandler}
                >
                    x
                </button>
            </div>

            <div className="mainInfo">
                <img
                    src={`http://openweathermap.org/img/wn/${city.weather?.[0].icon}@2x.png`}
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
        </>
    }

    return (
        <>
            {
                pathname === `/city/${city.name}`
                    ? <div className="card cardList">
                        {renderCard()}
                    </div>
                    : <Link to={`city/${city.name}`} className="card">
                        {renderCard()}
                    </Link>
            }
        </>

    );
};

export default Card;