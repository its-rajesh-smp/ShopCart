import React from 'react';
import "./HomeImageSlider.css"
import HomeImageSliderImage from '../../UI/Home Page UI/Home Image Slider UI/Home Image Slider Image/HomeImageSliderImage';
import HomeImageSliderBtn from '../../UI/Home Page UI/Home Image Slider UI/Home Image Slider Btn/HomeImageSliderBtn';

function HomeImageSlider(props) {
    return (
        <div className=' HomeImageSlider-div '>
            <HomeImageSliderBtn icon="<" />
            <HomeImageSliderImage />
            <HomeImageSliderBtn icon=">" />
        </div>
    );
}

export default HomeImageSlider;
