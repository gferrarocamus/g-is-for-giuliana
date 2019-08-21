import React from 'react';
import './App.css';
import linkedin from './img/linkedin.svg';
import github from './img/github.svg';
import connect from './img/message-square.svg';

function App() {
  return (
    <div className="App">
      {/* <img src="https://image.flaticon.com/icons/svg/1168/1168004.svg" /> */}
      <div className="card-border">
        <div className="card-container">
          <div className="card-contents">
            <h1>Giuliana Ferraro</h1>
            <h2>Full-Stack Web Developer</h2>
            <div className="icons">
              <a href="https://www.linkedin.com/in/giulianaferraro/en"><img src={linkedin} alt="LinkedIn" /></a>
              {'| '}
              <a href="https://github.com/gferrarocamus"><img src={github} alt="GitHub" /></a>
              {'| '}
              <a href="https://join.skype.com/invite/wyL8Xviy3Af0"><img src={connect} alt="Skype" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
