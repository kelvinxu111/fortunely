import React from "react"
import Accordion from "./Accordion"
import {ReactComponent as Mastercard } from "../Mastercard.svg";
import {ReactComponent as Visa } from "../Visa.svg";

export const Body = props =>(
    <body>
        <p className="mainBlock">{props.text}</p>
        <h1>Welcome, Steve!</h1>
        <div className="card-info">
            <a className="card1"><Mastercard/></a>
            <text className="card1">Debit Card</text>
            <a className="spacer-small"></a>
            <a className="card2"><Visa/></a>
            <text className="card2">Credit Card</text>
            <a className="spacer-small"></a>
            <text> | </text>
            <a className="spacer-small"></a>
            <text id="last-updated"> last updated 2019/09/05 11:59pm </text>
        </div>
        <br></br>
        <div className="summary-section">
            <h2>Summary </h2>
            <ul>
            <h3>Saving Account </h3>
            </ul>
            <ul>
            <h3>Last month saving </h3>
            </ul>
            <ul>
            <h3>Milestone achieved </h3>
            </ul>

        </div>
        <Accordion
          title="Test cash"
          content=""
        />
    </body>
);
