import React from 'react';
import "./Homepage.css"
import NavCategory from '../../Components/Home Page/Nav Category/NavCategory';
import HomeImageSlider from '../../Components/Home Page/Home Image Slider/HomeImageSlider';
import AddsCardContainer from '../../Components/Home Page/Adds Card Container/AddsCardContainer';

function Homepage(props) {
    return (
        <div className=' Homepage-div remove__Header'>
            <NavCategory />
            <HomeImageSlider />
            <AddsCardContainer />
            <AddsCardContainer />
            <AddsCardContainer />
            <AddsCardContainer />
        </div>
    );
}

export default Homepage;
