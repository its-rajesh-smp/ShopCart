import React from 'react';
import "./CartPagePriceCard.css"

function CartPagePriceCard(props) {
    return (
        <div className=' CartPagePriceCard-div '>
            <div className='CartPagePriceCard-div__container'>


                <div className='priceDetails'>
                    <p>PRICE DETAILS</p>
                </div>
                <div>
                    <div>
                        <p>Price {"("}3 items{")"}</p>
                        <p>₹29,084</p>
                    </div>
                    <div>
                        <p>Price {"("}3 items{")"}</p>
                        <p>₹29,084</p>
                    </div>
                    <div>
                        <p>Price {"("}3 items{")"}</p>
                        <p>₹29,084</p>
                    </div>
                    <div>
                        <p>Price {"("}3 items{")"}</p>
                        <p>₹29,084</p>
                    </div>
                    <div>
                        <p>Price {"("}3 items{")"}</p>
                        <p>₹29,084</p>
                    </div>
                    <div className='totalPrice'>
                        <p>Total Amount</p>
                        <p>₹17,913</p>
                    </div>

                    <div className='totalSave'>
                        <p>You will save ₹11,171 on this order</p>
                    </div>
                </div>




            </div>
        </div>
    );
}

export default CartPagePriceCard;
