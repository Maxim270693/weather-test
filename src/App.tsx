import React from 'react';
import './App.scss';
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";

function App() {
    return (
        <div className="App">
            <Input/>
            <div className="main">
                <Card/>
                <Card/>
            </div>
        </div>
    );
}

export default App;
