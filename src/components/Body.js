import React from "react"
import Accordion from "./Accordion"
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {ReactComponent as Mastercard } from "../Mastercard.svg";
import {ReactComponent as Visa } from "../Visa.svg";
import "../styles/styles.css";


export default class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "Test cash",
            content:"",
            dateRange:"March 1,2019 - August 1,2019  (5 months)",
            milestonesReached:"4/6",
            nextMilestone:" save $1,800 by July 20, 2019 "
        }

    }
        /*For now, values in the accordion will be hardcoded until development of accompanying API is sufficient to 
        support this component. After API is developed, replace onActive functions with a single function to call the API and return with values
        to be updated.
        */
    onChange = (eventKey) =>{
        if (eventKey==="uptodate"){
            this.onActiveUpToDate();
        }
        else if (eventKey==="weekly"){
            this.onActiveWeekly()
        }
        else if(eventKey==="monthly"){
            this.onActiveMonthly()
        }else if(eventKey==="yearly"){
            this.onActiveYearly()
        }
    }
    onActiveUpToDate = () =>{
        this.setState({
            title: "Test cash",
            content:"",
            dateRange:"March 1,2019 - August 1,2019  (5 months)",
            milestonesReached:"4/6",
            nextMilestone:" save $1,800 by July 20, 2019 "
        })
    }
    onActiveWeekly = () =>{
        this.setState({
            title: "Weekly Goals",
            content:"",
            dateRange:"March 1,2019 - August 1,2019  (5 months)",
            milestonesReached:"4/6",
            nextMilestone:" save $1,800 by July 20, 2019 "
        })
    }
    onActiveMonthly = () =>{
        this.setState({
            title: "Monthly Goals",
            content:"",
            dateRange:"March 1,2019 - August 1,2019  (5 months)",
            milestonesReached:"4/6",
            nextMilestone:" save $1,800 by July 20, 2019 "
        })
    }
    onActiveYearly = () =>{
        this.setState({
            title: "Yearly Goals",
            content:"",
            dateRange:"March 1,2019 - August 1,2019  (5 months)",
            milestonesReached:"4/6",
            nextMilestone:" save $1,800 by July 20, 2019 "
        })
    }
    render(){
        return(
            
            <div>
                <p className="mainBlock">{this.props.text}</p>
                <body>
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
               
                    <Tabs className="tabs" defaultActiveKey="uptodate" onSelect={this.onChange} transition="true">
                        <Tab eventKey="uptodate" title="Up to Date"></Tab>
                        <Tab eventKey="weekly" title="Weekly"></Tab>
                        <Tab eventKey="monthly" title="Monthly"></Tab>
                        <Tab eventKey="yearly" title="Yearly"></Tab>
                    </Tabs>
             
                
                
                <Accordion
                title={this.state.title}
                content={this.state.content}
                dateRange={this.state.dateRange}
                milestonesReached={this.state.milestonesReached}
                nextMilestone={this.state.nextMilestone}
                />
                </body>
            </div>
        )
    }
    
}

    



   

