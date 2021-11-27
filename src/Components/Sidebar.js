import React from 'react';
import '../App.css';
import '../Components/Sidebar.css';
import {SidebarData} from './SidebarData'

function Sidebar() {
    return (
        <div class='Sidebar'>
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
