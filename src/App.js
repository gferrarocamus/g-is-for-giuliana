import React from 'react';
import './App.css';
import linkedin from './img/linkedin.svg';
import github from './img/github.svg';
import connect from './img/message-square.svg';

function App() {
  return (
    <div className={
      `App ${!(matchMedia('(hover: none)').matches)
        ? 'can-hover'
        : ''
      }`
    }
    >
      <div className="card">
        <div className="card-border card__side card__side--front">
          <div className="card-container">
            <div className="card-contents">
              <h1>Giuliana Ferraro</h1>
              <h2>Full-Stack Web Developer</h2>
            </div>
          </div>
        </div>
        <div className="card-border card__side card__side--back">
          <div className="card-container">
            <div className="card-contents">
              <div className="icons">
                <a href="https://www.linkedin.com/in/giulianaferraro/en" data-toggle="tooltip" title="giulianaferraro on LinkedIn" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                {'| '}
                <a href="https://github.com/gferrarocamus" data-toggle="tooltip" title="gferrarocamus on GitHub" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" /></a>
                {'| '}
                <a href="https://join.skype.com/invite/wyL8Xviy3Af0" data-toggle="tooltip" title="giulianaferrarocamus on Skype" target="_blank" rel="noopener noreferrer"><img src={connect} alt="Skype" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
