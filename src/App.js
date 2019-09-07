import React from 'react';
import './App.css';
import {Body} from "./components/Body"
import Accordion from "./components/Accordion"
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar> 
        
      </Sidebar>
      <div className="App-mainContent">
      <header className="App-header">
        <Body> </Body>
        <p>
          {/*<Animator values ={[0,20,40,60,80,100]}>
            {percentage =>(
              <ProgressBar value= {percentage}/>
            )}
          </Animator>
            */}
        </p>
      </header>
    </div>
    </div>
  );
}

export default App;
