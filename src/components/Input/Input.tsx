import React, {ChangeEvent, KeyboardEvent, useEffect} from 'react';
import './input.scss';
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType, RootStateType} from "../../types/types";
import {inputValueAC} from "../../bll/actions/actions";
import {addCityTC, editCityTC} from "../../bll/thunks/thunk";

const Input = () => {
    const dispatch = useDispatch();

    const {
        inputValue,
        editCity,
        cities,
    } = useSelector<RootStateType, InitialStateType>(state => state.city);

    useEffect(() => {
        localStorage.setItem('cities', JSON.stringify(cities))
    }, [cities]);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(inputValueAC(event.target.value))
    }

    const onAddCityHandler = () => {
        // @ts-ignore
        dispatch(addCityTC(inputValue))
    };

    const onEditCityHandler = () => {
        // @ts-ignore
        dispatch(editCityTC(inputValue))
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
            onAddCityHandler()
        }
    }

    return (
        <div className="inputWrap">
            <input type="text"
                   placeholder="Введите город..."
                   className="input"
                   value={inputValue}
                   onChange={onChange}
                   onKeyDown={onKeyDownHandler}
            />
            {
                !editCity
                    ? <button className="button"
                              onClick={onAddCityHandler}
                    >+</button>
                    : <button className="button"
                              onClick={onEditCityHandler}
                    >done</button>
            }
        </div>
    );
};

export default Input;