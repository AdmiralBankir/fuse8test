import React from 'react';
import './ApartmentsList.css'
import Filter from '../Filter/Filter';

class ApartmentsList extends React.Component {
    state = {};
    render() {
        return (
            <main>
                <Filter />
                <ul className="apart-list">
                    <li className="apart-list__item">Apartment #1</li>
                </ul>
            </main>
        );
    };
};

export default ApartmentsList;