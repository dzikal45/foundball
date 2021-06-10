import React from 'react'
import '../assets/css/sidebar.css'
import {sidebarData} from '../screens/sidebarData'

function sidebar() {
    return (
        <div className=" Sidebar">
            <ul>
                {sidebarData.map((val,key) =>
                {
                    return (
                        <li key={key} onClick={()=> {window.location.pathname = val.link}}>
                            {" "}
                            <div>
                                {val.icon}
                            </div>
                            {" "}
                            <div>
                                {val.title}
                            </div>
                        </li>
                    );
                })}
            </ul>
            
        </div>
    )
}

export default sidebar