import React from 'react';
import "./AddsCardContainer.css"
import Add from '../../UI/Home Page UI/Adds Card Container UI/Add/Add';

function AddsCardContainer(props) {
    return (
        <div className=' AddsCardContainer-div '>
            <Add />
            <Add />
            <Add />
        </div>
    );
}

export default AddsCardContainer;
