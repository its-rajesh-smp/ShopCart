import React from 'react';
import "./CheckoutAccordionCard.css"


function CheckoutAccordionCard(props) {
    return (
        <div className=' CheckoutAccordionCard-div '>

            <div className='CheckoutAccordionCard-div_bar '>
                <p className='CheckoutAccordionCard-div__number'>1</p>
                <p>DELIVERY ADDREESS</p>
            </div>

            {
                props.children
            }
            {/* 
            <div className='CheckoutAccordionCard-div_bar CheckoutAccordionCard-div_bar__shadow '>
                <p className='CheckoutAccordionCard-div__number'>1</p>
                <div>
                    <div className='CheckoutAccordionCard-div_bar_currentTick'>
                        <p>DELIVERY ADDREESS</p>
                        <i className='bx bx-check'></i>
                    </div>
                    <p className='CheckoutAccordionCard-div_bar__shadow__current'>654654</p>
                </div>
                <button>CHANGE</button>
            </div> */}

        </div>
    );
}

export default CheckoutAccordionCard;
