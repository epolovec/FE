import React from 'react';
import '../../App.css';
import '../Sidebar/Sidebar.css';
import {SidebarData} from '../Sidebar/SidebarData'
import Shift4Logo from '../../Shift4-Payments-for-dark.svg'

function Sidebar() {
    return (
        <div class='Sidebar'>
            <img src={Shift4Logo} alt='Shift4 Logo'></img>
            <ul className='SidebarList'>
        {SidebarData.map((val, key) => {
            return <li key={key} className='row' onClick={() => {window.location.pathname = val.link}}>
                {" "}
                <div>{val.title}</div>
                </li>
        })}
        </ul>
        </div>
    );
}

export default Sidebar
