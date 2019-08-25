import React, { useState, useRef } from "react";
import ProgressBar from "./ProgressBar";
import "../styles/styles.css";
import {ReactComponent as ChevronUp} from "../chevron.svg";
import Pill from "./Pill";
export default function Accordion(props) {
    
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");
    
   
    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
        setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
        setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
        console.log(setActive);
    }
    
    return (
        <div className="accordion__section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
            <ChevronUp className={`${setRotate}`}/>
            <div className="accordion__title">
                <p >{props.title}</p>
            </div>
            <div className="accordion__progressbar">
                <ProgressBar value={80}/>
            </div>
            
            
        </button>
        <div
            ref={content}
            style={{ maxHeight: `${setHeight}` }}
            className="accordion__content"
        >
            <div className="accordion__text">
                <ul className="ul">
                    <li>
                        date range
                        <div className="listdetails">
                            March 1,2019 - August 1,2019 (5 months)
                        </div>
                    </li>
                    <li>
                        milestones 
                        <div className="listdetails">
                        <div style={{ fontWeight: 'bold' ,  display: 'inline-flex', flexDirection: 'row'}}>4</div>/6
                        </div>
                    </li>
                    <li>
                        next milestone
                        <div className="listdetails">
                            $1,800 saved  |  July 20, 2019
                        </div>
                    </li>
                    <li>
                        auto deposit
                        <Pill text="test"/>
                    </li>
                </ul>
            
                {props.content}
            </div>
        </div>
        </div>
        );
}
