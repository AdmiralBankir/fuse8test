import React from 'react';
import './Filter.css';

const Filter = props => {
    return (
        <div className="filter">
            <label className="filter__label" htmlFor="filterInput">Filter</label>
            <input className="filter__input" type="text" id="filterInput" />
        </div>
    );
};

export default Filter;