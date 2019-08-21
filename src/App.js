import React from 'react';
import './App.css';
import linkedin from './img/linkedin.svg';
import github from './img/github.svg';
// import add from './img/user-plus.svg';
import connect from './img/message-square.svg';

function App() {
  return (
    <div className="App">
      <div className="card-border">
        <div className="card-contents">
          <h1>Giuliana Ferraro</h1>
          <h2>Full-Stack Web Developer</h2>
          <div className="icons">
            <a href=""><img src={linkedin} alt="LinkedIn"></img></a>
            | <a href=""><img src={github} alt="GitHub"></img></a>
            | <a href=""><img src={connect} alt="Skype"></img></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
