import React, {ChangeEvent, KeyboardEvent} from 'react';
import './input.scss';
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType, RootStateType} from "../../types/types";
import {inputValueAC} from "../../bll/actions/actions";
import {addCityTC, editCityTC} from "../../bll/thunks/thunk";

const Input = () => {
    const dispatch = useDispatch();

    const {
        inputValue,
        editCity
    } = useSelector<RootStateType, InitialStateType>(state => state.city);

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