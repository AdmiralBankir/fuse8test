import React from 'react';
import './MoreBtn.css';
import chevronIcon from '../../img/chevron.svg'

const MoreBtn = props => {
    return (
        <button className="more-btn" type="button">
            See more
            <svg width="7" height="17" viewBox={chevronIcon.viewBox}>
                <use xlinkHref={`#${chevronIcon.id}`} />
            </svg>
        </button>
    );
};

export default MoreBtn;