import React from 'react';
import "./YourOrderContainer.css"
import YourOrderItem from '../Your Order Item/YourOrderItem';

function YourOrderContainer(props) {
    return (
        <div className=' YourOrderContainer-div '>
            <div className='YourOrderContainer-div__searchDiv'>
                <input type="text" placeholder='Search your orders here' />
                <button>Search Orders</button>
            </div>

            <div className='YourOrderContainer-div__orderContainer'>
                <YourOrderItem />
                <YourOrderItem />
                <YourOrderItem />
                <YourOrderItem />
            </div>


        </div>
    );
}

export default YourOrderContainer;
