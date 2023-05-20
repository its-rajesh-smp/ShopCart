import React from 'react';
import "./Pagination.css"

function Pagination(props) {
    return (
        <div className=' Pagination-div '>
            <p className='Pagination-div__next' >NEXT</p>
            <p>1</p>
            <p>2</p>
            <p className='active_page'>3</p>
            <p>4</p>
            <p>5</p>
            <p className='Pagination-div__next' >PREV</p>
        </div>
    );
}

export default Pagination;
