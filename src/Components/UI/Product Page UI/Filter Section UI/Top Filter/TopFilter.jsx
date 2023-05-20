import React from 'react';
import "./TopFilter.css"
import Filter from './Filter/Filter';

function TopFilter(props) {
    return (
        <div className=' TopFilter-div filterCard'>
            <div className=' TopFilter-div__firstDiv ' >
                <p className=' TopFilter-div__firstDiv__filter '>Filters</p>
                <p className=' TopFilter-div__firstDiv__clear'>CLEAR ALL</p>
            </div>

            <div>
                <Filter />
            </div>

        </div>
    );
}

export default TopFilter;
