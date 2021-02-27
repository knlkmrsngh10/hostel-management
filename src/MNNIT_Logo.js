import './MNNIT_Logo.css';
import React from 'react'

export default function MNNIT_Logo() {
    return (
        <div className ="Logo">
        <a className="Institute_Name"> MOTILAL NEHRU NATIONAL INSTITUTE OF TECHNOLOGY ALLAHABAD</a> 
        <p className="Warden"> Office of the Chief Warden</p> 
        <img className="Main_Building" src={process.env.PUBLIC_URL+ "/mnnit.jpg"}   />
        </div>
    )
}
