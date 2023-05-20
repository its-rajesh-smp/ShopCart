import React from 'react';
import "./SmallProductImageContainer.css"

function SmallProductImageContainer(props) {
    return (
        <div className=' SmallProductImageContainer-div '>

            <div className=' SmallProductImageContainer-div__contianer'>
                <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/p/a/f/-original-imaghrt5khsq53k5.jpeg?q=70" alt="" />
                <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/p/a/f/-original-imaghrt5khsq53k5.jpeg?q=70" alt="" />
                <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/p/a/f/-original-imaghrt5khsq53k5.jpeg?q=70" alt="" />
                <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/p/a/f/-original-imaghrt5khsq53k5.jpeg?q=70" alt="" />
                <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/p/a/f/-original-imaghrt5khsq53k5.jpeg?q=70" alt="" />
                <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/p/a/f/-original-imaghrt5khsq53k5.jpeg?q=70" alt="" />
            </div>


            <div className=' SmallProductImageContainer-div__mainImgContainer' >
                <img className='SmallProductImageContainer-div__mainImg' src="https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/p/a/f/-original-imaghrt5khsq53k5.jpeg?q=70" alt="" />
                <div>
                    <button className='buyNowBtn'>BUY NOW</button>
                    <button className='addToCartBtn'>ADD TO CART</button>
                </div>
            </div>


        </div>
    );
}

export default SmallProductImageContainer;
