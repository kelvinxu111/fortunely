import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressBar from "./components/ProgressBar"
import {Body} from "./components/Body"
import Animator from "./Animation Helper/ChangingProgressProvider"
import Accordion from "./components/Accordion"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
  );
}

export default App;
