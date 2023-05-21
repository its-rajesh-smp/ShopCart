import React from 'react';
import "./OrderStatus.css"

function OrderStatus(props) {
    return (
        <div className=' OrderStatus-div '>
            <div className='OrderStatus-div__lineContainer'>
                <div className='point'></div>

                <div className='centerLine'></div>

                <div className='point'></div>

                <div className='centerLine'></div>

                <div className='point'></div>

                <div className='centerLine'></div>

                <div className='point'></div>

                <div className='centerLine'></div>

                <div className='point'></div>
            </div>
            <div className='OrderStatus-div__statusContainer'>
                <p>02/05/2021</p>
                <p>On The Way</p>
                <p>On The Way</p>
                <p>On The Way</p>
                <p>10/05/2021</p>
            </div>

        </div>
    );
}

export default OrderStatus;
