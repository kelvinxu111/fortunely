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
                    <div className="section_title">
                        <h4>date range</h4>
                        <h4>milestones reached</h4>
                        <h4>next milestone</h4>
                        <h4>auto deposit</h4>
                        </div>
                    <div className="section_content">
                        <p>{props.dateRange}</p>
                        <p>{props.milestonesReached}
                        </p>
                        <p>{props.nextMilestone}</p>
                        <p>
                            <Pill text="test"/>
                         </p>
                    </div>
            
                {props.content}
            </div>
        </div>
        </div>
        );
}
