import React from 'react';
import './App.css';
import logo from "./logo.svg";
import ProgressBar from "./components/ProgressBar"
import {Body} from "./components/Body"
import Animator from "./Animation Helper/ChangingProgressProvider"
import Accordion from "./components/Accordion"
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar> 
        
      </Sidebar>
      <div className="App-mainContent">
        <Body> </Body>
        <p>
          {/*<Animator values ={[0,20,40,60,80,100]}>
            {percentage =>(
              <ProgressBar value= {percentage}/>
            )}
          </Animator>
            */}
        </p>
    </div>
    </div>
  );
}

export default App;
