import React, { useState, useRef } from "react";
import ProgressBar from "./ProgressBar";
import "../styles/styles.css";
import {ReactComponent as ChevronUp} from "../chevron.svg";
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
            <div className="accordion__text">{props.content}</div>
        </div>
        </div>
        );
}
