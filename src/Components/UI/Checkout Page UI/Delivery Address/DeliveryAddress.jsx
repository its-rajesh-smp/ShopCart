import React from 'react';
import "./DeliveryAddress.css"
import DeliveryAddressMain from '../Delivery Address Main/DeliveryAddressMain';
import EditDeliveryAddress from '../Edit Delivery Address/EditDeliveryAddress';
import { useState } from 'react';

function DeliveryAddress(props) {

    const [edit, setEdit] = useState(false)


    return (
        <div className=' DeliveryAddress-div '>

            {!edit && <DeliveryAddressMain setEdit={setEdit} />}
            {edit && <EditDeliveryAddress setEdit={setEdit} />}



        </div>
    );
}

export default DeliveryAddress;
