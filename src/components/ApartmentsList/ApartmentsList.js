import React from 'react';
import './ApartmentsList.css'
import Filter from '../Filter/Filter';

import axios from 'axios';

const URL_FETCH = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes';

function getImage(type, width, height, title) {
    const size = width + 'x' + height;
    return 'https://via.placeholder.com/' + size + '.' + type + '?text=' + title.split(' ').join('');
}

function getApartItem(item) {
    const cls = ['apart-list__link'];

    if (item.type === 'IndependentLiving') {
        cls.push('apart-list__link--indepedent');
    }

    if (item.type === 'SupportAvailable') {
        cls.push('apart-list__link--support');
    }

    return (
        <a className={cls.join(' ')}
            href={`/details/${item.id}`}>
            <figure className="apart-list__media">
                <picture>
                    <source type="image/webp" src={getImage('webp', 377, 227, item.title)} srcSet={getImage('webp', 377 * 2, 227 * 2, item.title) + ' 2x'} />
                    <img width="377" height="227" src={getImage('jpeg', 377, 227, item.title)} srcSet={getImage('jpeg', 377 * 2, 227 * 2, item.title) + ' 2x'} alt="Apart view" />
                </picture>
                <figcaption>
                    {item.type}
                </figcaption>
            </figure>
            <div className="apart-list__desc">
                <p className="apart-list__desc-title">{item.title}</p>
                <p className="apart-list__desc-address">{item.address}</p>
                <p className="apart-list__desc-price">{'New Properties for Sale from £' + item.price}</p>
            </div>
        </a>
    );
}

class ApartmentsList extends React.Component {
    state = {
        apartments: [],
        loaded: false
    };

    async componentDidMount() {
        try {
            const response = await axios.get(URL_FETCH);
            const apartments = response.data;
            const loaded = true;
            this.setState({
                apartments,
                loaded
            })
        } catch (e) {
            alert(e);
        }
    }

    render() {
        const apartList = (
            <ul className="apart-list">
                {this.state.apartments.map((item, index) => {
                    return (
                        <li className="apart-list__item"
                            key={index}>
                            {getApartItem(item)}
                        </li>
                    )
                })}
            </ul>);

        const loader = <div>Загрузка</div>;

        const rendered = this.state.loaded ? apartList : loader;

        return (
            <main>
                <Filter />
                {rendered}
            </main>
        );
    };
};

export default ApartmentsList;