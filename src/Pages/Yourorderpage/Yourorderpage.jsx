import React from 'react';
import "./Yourorderpage.css"
import YourOrderFilter from '../../Components/Your Order Page/YourOrderFilter/YourOrderFilter';
import YourOrderContainer from '../../Components/Your Order Page/Your Order Container/YourOrderContainer';

function Yourorderpage(props) {
    return (
        <div className=' Yourorderpage-div  remove__Header'>

            <YourOrderFilter />

            <YourOrderContainer />
        </div>
    );
}

export default Yourorderpage;
