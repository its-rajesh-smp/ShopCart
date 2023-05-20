import React from 'react';
import "./ProductImageSection.css"

function ProductImageSection(props) {
    return (
        <div className=' ProductImageSection-div '>
            <i className='bx bxs-heart'></i>
            <img src="https://rukminim1.flixcart.com/image/312/312/xif0q/television/5/c/k/-original-imaggsnkne4n5mvh.jpeg?q=70" alt="productImage" />


            {props.showBtn &&

                <div className="ProductImageSection-div__btnContainer">
                    <button>+</button>
                    <p>10</p>
                    <button>-</button>
                </div>

            }

        </div>
    );
}

export default ProductImageSection;
