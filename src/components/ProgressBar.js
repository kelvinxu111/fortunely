import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

export default class Progressbar extends React.Component{

    render(){
        return(
            <div>
                <ProgressBar value={this.props.value}/>
            </div>
        )
    }
}
const ProgressBar = (props) =>{
    return(
        <div className="progress-bar">
            <Filler percentage={props.value}/>
        </div>
    )
}
const Filler = (props) => {
    return <div className ="filler" style={{width: `${props.percentage}%` }} />
}
