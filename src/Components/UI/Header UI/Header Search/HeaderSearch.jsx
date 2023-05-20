import React from 'react';
import "./HeaderSearch.css"

function HeaderSearch(props) {
    return (
        <div className=' HeaderSearch-div '>
            <input type="text" placeholder='Search For Products, brands and more' />
            <button><i className='bx bx-search'></i></button>
        </div>
    );
}

export default HeaderSearch;
