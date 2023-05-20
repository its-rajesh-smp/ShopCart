import React from 'react';
import "./RatingFilter.css"

function RatingFilter(props) {
    return (
        <div className=' RatingFilter-div filterCard'>
            <p className='RatingFilter-div__name'>CUSTOMER RATINGS</p>
            <div className='RatingFilter-div__ratingContainer'>
                <div className='RatingFilter-div__rating'>
                    <input type="checkbox" />
                    <p>4⭐ & above</p>
                </div>
                <div className='RatingFilter-div__rating'>
                    <input type="checkbox" />
                    <p>3⭐ & above</p>
                </div>
                <div className='RatingFilter-div__rating'>
                    <input type="checkbox" />
                    <p>2⭐ & above</p>
                </div>
                <div className='RatingFilter-div__rating'>
                    <input type="checkbox" />
                    <p>1⭐ & above</p>
                </div>
            </div>
        </div>
    );
}

export default RatingFilter;
