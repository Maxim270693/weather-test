import React from 'react';
import './App.scss';
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";
import {useSelector} from "react-redux";
import {RootStateType, WeatherTypes} from "./types/types";

function App() {
    const cities = useSelector<RootStateType, WeatherTypes[]>(state => state.city.cities);

    console.log('cities xxx', cities)

    return (
        <div className="App">
            <Input/>
            <div className="main">
                {
                    cities.map(city => <Card key={city.id} city={city}/>)
                }
            </div>
        </div>
    );
}

export default App;
