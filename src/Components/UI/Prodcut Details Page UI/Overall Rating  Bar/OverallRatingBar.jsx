import React from 'react';
import "./OverallRatingBar.css"

function OverallRatingBar(props) {

    // Calculating InnerBar Width
    const barWidth = (props.value / props.maxValue) * 100


    return (
        <div className=' OverallRatingBar-div '>
            <p><span>{props.number}</span>⭐</p>
            <div className='OverallRatingBar-div_bar'>
                <div style={{ backgroundColor: props.color, width: `${barWidth}%` }} className='OverallRatingBar-div_bar_inner'></div>
            </div>
            <p>{props.value}</p>
        </div>
    );
}

export default OverallRatingBar;
