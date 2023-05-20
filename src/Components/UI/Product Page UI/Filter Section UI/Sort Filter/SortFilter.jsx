import React from 'react';
import "./SortFilter.css"

function SortFilter(props) {
    return (
        <div className=' SortFilter-div '>
            <p style={{ fontWeight: "500" }}>Sort By</p>
            <p>Popularity</p>
            <p>Price--Low to High</p>
            <p>Price--High to Low</p>
            <p>Newest First</p>
            <p>Discount</p>
        </div>
    );
}

export default SortFilter;
