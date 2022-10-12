import React from 'react';
import Input from "../Input/Input";
import Card from "../Card/Card";
import {useSelector} from "react-redux";
import {RootStateType, WeatherTypes} from "../../types/types";
import Pagination from "../Pagination/Pagination";
import {MAX_CITIES_LENGTH} from "../../constants/constants";

const MainPage = () => {
    const cities = useSelector<RootStateType, WeatherTypes[]>(state => state.city.cities);
    const isError = useSelector<RootStateType, string>(state => state.city.isError);
    const currentPage = useSelector<RootStateType, number>(state => state.city.currentPage);
    const perPage = useSelector<RootStateType, number>(state => state.city.perPage);

    const lastCityIndex = currentPage * perPage;
    const firstCityIndex = lastCityIndex - perPage;
    const currentCity = cities.slice(firstCityIndex, lastCityIndex);

    return (
        <div>
            <Input/>
            <div className="error">{isError}</div>
            <div className="main">
                {
                    !cities.length
                        ? <div>Список городов пуст</div>
                        : currentCity.map(city => <Card key={city?.id} city={city}/>)
                }
            </div>
            {
                cities.length > MAX_CITIES_LENGTH && <Pagination totalPosts={cities.length}
                                                                 perPage={perPage}
                                                                 currentPage={currentPage}
                />
            }
        </div>
    );
};

export default MainPage;