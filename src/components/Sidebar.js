import React from 'react';
import "../styles/styles.css";
import {ReactComponent as Logo} from "../logo.svg";



export default function Sidebar() {
    return (
        <div className="sidebar"> 
            <Logo className="App-logo"/> 
            <div className="tab">
                <p>Overview </p>
                </div>
            <div className="tab">
                <p>Saving</p>
                </div>
            <div className="tab">
                <p>Calendar</p>
                </div>
            <div className="tab">
                <p>Settings</p>
                </div>
        </div>
    );
}