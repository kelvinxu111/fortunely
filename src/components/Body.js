import React from "react"
import Accordion from "./Accordion"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withStyles} from '@material-ui/core/styles'
import {ReactComponent as Mastercard } from "../Mastercard.svg";
import {ReactComponent as Visa } from "../Visa.svg";
const styles = {
    root:{
        textTransform: 'capitalize',
        color: '#fae042 !important'
    }
};
class Body extends React.Component{
    constructor(props){
        super(props);
        this.title = "Test cash"
        this.content = ""
        this.dateRange="March 1,2019 - August 1,2019  (5 months)"
        this.milestonesReached="4/6"
        this.nextMilestone=" save $1,800 by July 20, 2019 "
    }
        /*For now, values in the accordion will be hardcoded until development of accompanying API is sufficient to 
        support this component. After API is developed, replace onActive functions with a single function, accompanied
        by a single function with the values presumably inserted inline in the Tab components.
        */
    onChange(value){
        if (value==="uptodate"){
            this.onActiveUpToDate();
        }
        else if (value==="weekly"){
            this.onActiveWeekly();
        }
        else if(value==="monthly"){
            this.onActiveMonthly();
        }else if(value==="yearly"){
            this.onActiveYearly();
        }
    }
    onActiveUpToDate(){
        this.title = "Up to Date"
        this.content = ""
        this.dateRange="March 1,2019 - August 1,2019  (5 months)"
        this.milestonesReached="4/6"
        this.nextMilestone=" save $1,800 by July 20, 2019 "
    }
    onActiveWeekly(){
        this.title = "Weekly Goals"
        this.content = ""
        this.dateRange="March 1,2019 - August 1,2019  (5 months)"
        this.milestonesReached="4/6"
        this.nextMilestone=" save $1,800 by July 20, 2019 "
    }
    onActiveMonthly(){
        this.title = "Monthly Goals"
        this.content = ""
        this.dateRange="March 1,2019 - August 1,2019  (5 months)"
        this.milestonesReached="4/6"
        this.nextMilestone=" save $1,800 by July 20, 2019 "
    }
    onActiveYearly(){
        this.title = "Yearly Goals"
        this.content = ""
        this.dateRange="March 1,2019 - August 1,2019  (5 months)"
        this.milestonesReached="4/6"
        this.nextMilestone=" save $1,800 by July 20, 2019 "
    }
    render(){
        const {classes} = this.props;
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
                <Tabs classes={{root: classes.root}} onChange={this.onChange} defaultSelectedIndex={1}>
                    <Tab value="uptodate" label="Up to Date"></Tab>
                    <Tab value="weekly" label="Weekly"></Tab>
                    <Tab value="monthly" label="Monthly"></Tab>
                    <Tab value="yearly" label="Yearly"></Tab>
                </Tabs>
                
                <Accordion
                title={this.title}
                content={this.content}
                dateRange={this.dateRange}
                milestonesReached={this.milestonesReached}
                nextMilestone={this.nextMilestone}
                />
                </body>
            </div>
        )
    }
    
}
export default withStyles(styles)(Body);
    



   

