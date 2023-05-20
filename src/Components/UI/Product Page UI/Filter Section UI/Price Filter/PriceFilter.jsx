import React from 'react';
import "./PriceFilter.css"

function PriceFilter(props) {
    return (
        <div className=' PriceFilter-div filterCard'>
            <p className='PriceFilter-div__name'>PRICE</p>

            <div>
                <select name="min" >
                    <option value="MIN">MIN</option>
                    <option value="MIN">1000</option>
                    <option value="MIN">2000</option>
                    <option value="MIN">3000</option>
                </select>

                <p>to</p>

                <select name="max" >
                    <option value="MIN">60000+</option>
                    <option value="MIN">10000</option>
                    <option value="MIN">20000</option>
                    <option value="MIN">30000</option>
                </select>
            </div>
        </div>
    );
}

export default PriceFilter;
