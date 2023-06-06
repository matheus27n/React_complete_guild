import React, {useState} from 'react';

import './FiltroDespesa.css';

const FiltroDespesa = (props) => {

    const DropdownChangeHandler = (event) => { // event é um objeto que contém informações sobre o evento que ocorreu
        props.onChangeFilter(event.target.value); // event.target.value é o valor do elemento que disparou o evento
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filtrar por ano</label>
                <select value={props.selected} onChange={DropdownChangeHandler}>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022" selected>2022</option>
                </select>
            </div>
        </div>
    );
};

export default FiltroDespesa;