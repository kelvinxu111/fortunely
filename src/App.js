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
      <header className="App-header">
        <h1>
          <Body text="Welcome, Steve!"/>
        </h1>
        <Accordion
          title="Test cash"
          content="hopefully this works"
        />
        
        
        <p>
          {/*<Animator values ={[0,20,40,60,80,100]}>
            {percentage =>(
              <ProgressBar value= {percentage}/>
            )}
          </Animator>
            */}
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Learn React
        </a>
      </header>
    </div>
    </div>
  );
}

export default App;
