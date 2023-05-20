import React from 'react';
import "./PaymentCard.css"
import { TextField } from '@mui/material';

function PaymentCard(props) {
    return (
        <div className=' PaymentCard-div '>
            <input type="radio" name="" id="" />
            <div>
                <p>Cash On Delivery</p>
                <div className='PaymentCard-div__cod'>
                    <img src="data:image/png;base64,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" alt="" />
                    <TextField
                        label="Enter the characters"
                        id="standard-size-small"
                        size="small"
                        variant="standard"
                    />
                </div>
            </div>
        </div>
    );
}

export default PaymentCard;
