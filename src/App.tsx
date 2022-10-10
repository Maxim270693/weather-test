import React from 'react';
import './App.scss';
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";
import {useSelector} from "react-redux";
import {RootStateType, WeatherTypes} from "./types/types";

function App() {
    const cities = useSelector<RootStateType, WeatherTypes[]>(state => state.city.cities);

    return (
        <div className="App">
            <h1>Weather</h1>
            <Input/>
            <div className="main">
                {
                    !cities.length
                        ? <div>Список городов пуст</div>
                        : cities.map(city => <Card key={city?.id} city={city}/>)
                }
            </div>
        </div>
    );
}

export default App;
