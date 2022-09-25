import React, {ChangeEvent, KeyboardEvent} from 'react';
import './input.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../types/types";
import {inputValueAC} from "../../bll/actions/actions";
import {addCityTC} from "../../bll/thunks/thunk";

const Input = () => {
    const dispatch = useDispatch();

    const inputValue = useSelector<RootStateType, string>(state => state.city.inputValue);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(inputValueAC(event.target.value))
    }

    const onAddCityHandler = () => {
        // @ts-ignore
        dispatch(addCityTC(inputValue))
    };

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter') {
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
            <button className="button"
                    onClick={onAddCityHandler}
            >+
            </button>
        </div>
    );
};

export default Input;