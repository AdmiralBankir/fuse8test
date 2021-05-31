import React from 'react';
import './ApartmentsList.css'
import Filter from '../Filter/Filter';
import MoreBtn from '../MoreBtn/MoreBtn';
import Loader from '../Loader/Loader';
import axios from 'axios';

const URL_FETCH = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes';
const NUM_FILTERED_CHARS = 3;

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
                    <source type="image/webp" srcSet={getImage('webp', 377, 227, item.title) + ', ' + getImage('webp', 377 * 2, 227 * 2, item.title) + ' 2x'} />
                    <img width="377" height="227" src={getImage('jpeg', 377, 227, item.title)} srcSet={getImage('jpeg', 377 * 2, 227 * 2, item.title) + ' 2x'} alt="Apart view" />
                </picture>
                <figcaption className="apart-list__media-caption">
                    {item.type}
                </figcaption>
            </figure>
            <div className="apart-list__desc">
                <p className="apart-list__desc-title">{item.title}</p>
                <p className="apart-list__desc-address">{item.address}</p>
                <p className="apart-list__desc-price">{'New Properties for Sale from £' + item.price}</p>
                <p className="apart-list__desc-feature">Shared Ownership Available</p>
            </div>
        </a>
    );
}

class ApartmentsList extends React.Component {
    state = {
        apartments: [],
        loaded: false,
        inView: []
    };

    async componentDidMount() {
        try {
            const response = await axios.get(URL_FETCH);
            const apartments = response.data;
            const inView = apartments.slice(0, 6);
            const loaded = true;
            this.setState({
                apartments,
                loaded,
                inView
            })
        } catch (e) {
            alert(e);
        }
    }

    onFiltered(evt) {
        const input = evt.target;
        const filterValue = input.value.toLowerCase();
        const state = this.state;

        if (filterValue.trim() === '') {
            state.inView = state.apartments.slice(0, 6);
            this.setState({
                state
            })
            return;
        }

        if (filterValue.trim() < NUM_FILTERED_CHARS) return;

        state.inView = state.apartments.filter(apartment => apartment.title.toLowerCase().includes(filterValue));
        this.setState({
            state
        })
    }

    render() {
        const apartList = (
            <>
                <ul className="apart-list">
                    {this.state.inView.map((item, index) => {
                        return (
                            <li className="apart-list__item"
                                key={index}>
                                {getApartItem(item)}
                            </li>
                        )
                    })}
                </ul>
                <MoreBtn />
            </>
        );

        const loader = <Loader />;

        const rendered = this.state.loaded ? apartList : loader;

        return (
            <main>
                <Filter onChange={this.onFiltered.bind(this)} />
                {rendered}
            </main>
        );
    };
};

export default ApartmentsList;