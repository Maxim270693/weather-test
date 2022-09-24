import React from 'react';
import './card.scss';

const Card = () => {
    return (
        <div className="card">
            <div className="mainInfo">
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="iconWeather"
                     className="icon"/>
                <div className="title">title</div>
                <div className="description">description</div>
                <div className="temperature">25</div>
            </div>
            <div className="information">
                <div>Humidity: 15</div>
                <div>Feels like: 19</div>
            </div>
        </div>
    );
};

export default Card;