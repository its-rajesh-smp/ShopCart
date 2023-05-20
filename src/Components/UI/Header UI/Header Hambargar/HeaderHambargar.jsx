import React from 'react';
import "./HeaderHambargar.css"
import { HeaderDropdownItem } from '../Header Dropdown/HeaderDropdown';

function HeaderHambargar(props) {
    return (
        <div className=' HeaderHambargar-div '>
            <i className='bx bx-menu'></i>

            {/* 
            <div className='HeaderHambargar-div__menu'>
                <div className='HeaderHambargar-div__menu__container'>
                    <p className='HeaderHambargar-div__menu_cataName'>Account</p>
                    <HeaderDropdownItem />
                    <HeaderDropdownItem />
                    <HeaderDropdownItem />
                    <HeaderDropdownItem />
                    <p className='HeaderHambargar-div__menu_cataName'>Order</p>
                    <HeaderDropdownItem />
                    <HeaderDropdownItem />
                    <HeaderDropdownItem />
                    <HeaderDropdownItem />
                    <p className='HeaderHambargar-div__menu_cataName'>Order</p>
                    <HeaderDropdownItem />
                    <HeaderDropdownItem />
                    <HeaderDropdownItem />
                    <HeaderDropdownItem />
                </div>
            </div> */}



        </div>
    );
}



export default HeaderHambargar;
