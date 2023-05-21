import React from 'react';
import "./YourOrderFilter.css"

function YourOrderFilter(props) {
    return (
        <div className=' YourOrderFilter-div '>
            <div className='YourOrderFilter-div__filterBar'>
                <i className='bx bx-filter'></i>
                <h2>Filters</h2>
            </div>



            <div className='YourOrderFilter-div__container'>
                <p className='container_name'>ORDER STATUS</p>

                <div className='YourOrderFilter-div__item'>
                    <input type="checkbox" name="" id="" />
                    <p>On the Way</p>
                </div>

                <div className='YourOrderFilter-div__item'>
                    <input type="checkbox" name="" id="" />
                    <p>On the Way</p>
                </div>

                <div className='YourOrderFilter-div__item'>
                    <input type="checkbox" name="" id="" />
                    <p>On the Way</p>
                </div>

                <div className='YourOrderFilter-div__item'>
                    <input type="checkbox" name="" id="" />
                    <p>On the Way</p>
                </div>

                <div className='YourOrderFilter-div__item'>
                    <input type="checkbox" name="" id="" />
                    <p>On the Way</p>
                </div>

            </div>


            <div className='YourOrderFilter-div__container'>
                <p className='container_name'>ORDER TIME</p>

                <div className='YourOrderFilter-div__item'>
                    <input type="checkbox" name="" id="" />
                    <p>On the Way</p>
                </div>

                <div className='YourOrderFilter-div__item'>
                    <input type="checkbox" name="" id="" />
                    <p>On the Way</p>
                </div>

                <div className='YourOrderFilter-div__item'>
                    <input type="checkbox" name="" id="" />
                    <p>On the Way</p>
                </div>

                <div className='YourOrderFilter-div__item'>
                    <input type="checkbox" name="" id="" />
                    <p>On the Way</p>
                </div>

                <div className='YourOrderFilter-div__item'>
                    <input type="checkbox" name="" id="" />
                    <p>On the Way</p>
                </div>

            </div>



        </div>
    );
}

export default YourOrderFilter;
