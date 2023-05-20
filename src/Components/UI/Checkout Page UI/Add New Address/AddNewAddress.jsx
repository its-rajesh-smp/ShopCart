import React from 'react';
import "./AddNewAddress.css"
import EditDeliveryAddress from '../Edit Delivery Address/EditDeliveryAddress';

function AddNewAddress(props) {

    return (
        <div className=' AddNewAddress-div '>

            <div className='AddNewAddress-div__bar'>
                <i className='bx bx-plus' ></i>
                <p>Add new Address</p>
            </div>


            {/* <EditDeliveryAddress /> */}
        </div>
    );
}

export default AddNewAddress;
