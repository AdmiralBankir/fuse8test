import React from 'react';
import './MoreBtn.css';

const MoreBtn = props => {
    return (
        <button className="more-btn" type="button">
            See more
            <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Chevron" d="M1 1L5.043 8.41667L1 15.8333" stroke="#363636" stroke-width="2" stroke-linecap="round" />
            </svg>

        </button>
    );
};

export default MoreBtn;