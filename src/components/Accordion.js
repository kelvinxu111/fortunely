import React, { useState, useRef } from "react";

import "../styles/styles.css";
import Chevron from "./chevron"
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
            <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            <p className="accordion__title">{props.title}</p>
        </button>
        <div
            ref={content}
            style={{ maxHeight: `${setHeight}` }}
            className="accordion__content"
        >
            <div
            className="accordion__text"
            dangerouslySetInnerHTML={{ __html: props.content }}
            />
        </div>
        </div>
        );
}
