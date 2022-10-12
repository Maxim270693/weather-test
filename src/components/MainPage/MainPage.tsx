import React from 'react';
import Input from "../Input/Input";
import Card from "../Card/Card";
import {useSelector} from "react-redux";
import {RootStateType, WeatherTypes} from "../../types/types";

const MainPage = () => {
    const cities = useSelector<RootStateType, WeatherTypes[]>(state => state.city.cities);
    const isError = useSelector<RootStateType, string>(state => state.city.isError);

    return (
        <div>
            <Input/>
            <div className="error">{isError}</div>
            <div className="main">
                {
                    !cities.length
                        ? <div>Список городов пуст</div>
                        : cities.map(city => <Card key={city?.id} city={city}/>)
                }
            </div>
        </div>
    );
};

export default MainPage;