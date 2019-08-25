import React from 'react';
import "../styles/styles.css";
import {ReactComponent as Logo} from "../logo.svg";
import {ReactComponent as OverviewIcon} from "../OverviewIcon.svg";
import {ReactComponent as SavingIcon} from "../SavingIcon.svg";
import {ReactComponent as CalendarIcon} from "../CalendarIcon.svg";
import {ReactComponent as SettingsIcon} from "../SettingsIcon.svg";



export default function Sidebar() {
    return (
        <div className="sidebar"> 
            <Logo className="App-logo"/> 
            <ul className="tab">
                <a className="icon"><OverviewIcon/></a>
                <text className="label">Overview</text>
                </ul>
            <ul className="tab">
                <a className="icon"><SavingIcon/></a>
                <text className="label">Saving</text>
                </ul>
            <ul className="tab">
                <a className="icon"><CalendarIcon/></a>
                <text className="label">Calendar</text>
                </ul>
            <ul className="tab">
                <a className="icon"><SettingsIcon/></a>
                <text className="label">Settings</text>
                </ul>
        </div>
    );
}