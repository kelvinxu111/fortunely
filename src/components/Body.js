import React from "react"
import Accordion from "./Accordion"

export const Body = props =>(
    <div>
        <p className="mainBlock">{props.text}</p>
        <h1>Welcome, Steve!</h1>
        <Accordion
          title="Test cash"
          content=""
        />

    </div>
);
