import React from 'react';
import "./EditDeliveryAddress.css"
import { TextField } from '@mui/material';

function EditDeliveryAddress(props) {

    // OnEditClick
    const onEditClickHandeler = () => {
        props.setEdit(false)
    }



    return (
        <div className=' EditDeliveryAddress-div '>

            <div className='EditDeliveryAddress-div__left'>
                <input type="radio" />
            </div>

            <div className='EditDeliveryAddress-div__center'>
                <p>EDIT ADDRESS</p>

                <button className='EditDeliveryAddress-div__center__locationBtn' >Use my current location</button>

                <form>
                    <div>
                        <TextField label="Name" id="standard-size-small" size="small" variant="filled" />
                        <TextField label="10-digit mobile number" id="standard-size-small" size="small" variant="filled" />
                    </div>

                    <div>
                        <TextField label="Pincode" id="standard-size-small" size="small" variant="filled" />
                        <TextField label="Locality" id="standard-size-small" size="small" variant="filled" />
                    </div>

                    <TextField label="Address (Area and Street)" id="standard-size-small" size="small" variant="filled" />

                    <div>
                        <TextField label="City/District/Town" id="standard-size-small" size="small" variant="filled" />
                        <TextField label="State" id="standard-size-small" size="small" variant="filled" />
                    </div>

                    <div>
                        <TextField label="Landmark" id="standard-size-small" size="small" variant="filled" />
                        <TextField label="Alternate Phone" id="standard-size-small" size="small" variant="filled" />
                    </div>

                </form>

                <div className='EditDeliveryAddress-div__center__btnGrp'>
                    <button>SAVE AND DELIVER HERE</button>
                    <button onClick={onEditClickHandeler}>CANCEL</button>
                </div>



            </div>


        </div>
    );
}

export default EditDeliveryAddress;
