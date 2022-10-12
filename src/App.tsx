import React from 'react';
import './App.scss';
import {Route, Routes} from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import SingleCity from "./components/SingleCity/SingleCity";

function App() {

    return (
        <div className="App">
            <h1>Weather</h1>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/city/:city" element={<SingleCity/>}/>
            </Routes>
        </div>
    );
}

export default App;
