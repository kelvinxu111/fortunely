import React, { useState } from "react";
import "../styles/styles.css";

export default function Pill(props){
    const [setActive, setActiveState] = useState("");
 
    function togglePill(){
        setActiveState(setActive === "" ? "depositbtn_active" : "");
    }

    return(
        <div>
            <button className={`depositbtn ${setActive}`} onClick={togglePill}> {props.text}</button>
        </div>
        
    )
    
   
}
