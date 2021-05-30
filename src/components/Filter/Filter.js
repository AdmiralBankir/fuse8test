import React from 'react';
import './Filter.css';

const Filter = props => {
    return (
        <div>
            <input type="text" id="filterInput" />
            <label htmlFor="filterInput">Filter</label>
        </div>
    );
};

export default Filter;